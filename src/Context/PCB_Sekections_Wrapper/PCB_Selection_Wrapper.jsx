import { createContext, useContext, useMemo, useState } from "react";

import React from "react";
import { useWatch } from "react-hook-form";

const PCBSelectionContext = createContext();

export const PCB_Selection_Wrapper = ({ children, control, setValue }) => {
  const mainName = "PCB_Specification_Selection";
  const [boardType, board_X_out_Allowance, board_Break_away_rail] = useWatch({
    control,
    name: [
      `${mainName}.BoardType.type`,
      `${mainName}.BoardType.X_out_Allowance`,
      `${mainName}.BoardType.Break_away_rail`,
    ],
  });
  const [isBoardChangeLoading, setIsBoardChangeLoading] = useState();
  const onChangeBoardType = async (value) => {
    setIsBoardChangeLoading(true);
    await new Promise((reslove) => {
      const name = `${mainName}.BoardType`;
      const DeleteValues = (...values) => {
        values.forEach((item) => {
          setValue(item, undefined);
        });
      };
      setValue(`${name}.type`, value);
      switch (value) {
        case "Single-pieces":
          {
            DeleteValues(
              `${name}.X_out_Allowance`,
              `${name}.Panel_requirements`,
              `${name}.Break_away_rail`,
              `${name}.Route_Process`
            );
          }
          break;
        case "Panel-by-Customer": {
          DeleteValues(
            `${name}.Panel_requirements`,
            `${name}.Break_away_rail`,
            `${name}.Route_Process`
          );
        }
      }
      reslove();
    });
    setIsBoardChangeLoading(false);
  };
  const onChangeValueWithinBoardType = (name, value) => {
    const PropName = `${mainName}.BoardType[${name}]`;
    setValue(PropName, value);
  };
  const materialType = useWatch({
    control,
    name: `${mainName}.material.type`,
  });
  const onChangeMaterialType = (value) => {
    setValue(`${mainName}.material.type`, value);
  };
  const layers = useWatch({
    control,
    name: `${mainName}.Layers.count`,
  });
  const onChangeLayerCount = (value) => {
    const name = `${mainName}.Layers`;
    const DeleteValues = (...values) => {
      values.forEach((item) => {
        setValue(item, undefined);
      });
    };
    setValue(`${name}.count`, value);
    if (value !== 1) {
      DeleteValues(
        `${name}.CopperLayer`,
        `${name}.Soldermask`,
        `${name}.Silkscreen`
      );
    }
    setValue(`${mainName}.Layers.count`, value);
  };
  const renderedChildren = useMemo(() => {
    return children;
  }, []);
  return (
    <PCBSelectionContext.Provider
      value={{
        boardType: {
          values: { boardType, board_X_out_Allowance, board_Break_away_rail },
          onChangeBoardType,
          onChangeValueWithinBoardType,
          loading: isBoardChangeLoading,
        },
        material: { onChangeMaterialType, materialType },
        layers: { count: layers, onChangeLayerCount },
      }}
    >
      {renderedChildren}
    </PCBSelectionContext.Provider>
  );
};
export const useBoardType = () => {
  const values = useContext(PCBSelectionContext);
  return values.boardType;
};
export const useMaterial = () => {
  const values = useContext(PCBSelectionContext);
  return values.material;
};
export const useLayers = () => {
  const values = useContext(PCBSelectionContext);
  return values.layers;
};
export const usePcbSelectionStoredValues = () => {
  return useContext(PCBSelectionContext);
};
