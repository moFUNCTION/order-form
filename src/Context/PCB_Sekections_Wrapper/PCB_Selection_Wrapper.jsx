import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

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
  const onChangeBoardType = useCallback(async (value) => {
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
  }, []);
  const onChangeValueWithinBoardType = useCallback((name, value) => {
    const PropName = `${mainName}.BoardType.${name}`;
    setValue(PropName, value);
  }, []);
  const materialType = useWatch({
    control,
    name: `${mainName}.material.type`,
  });
  const onChangeMaterialType = useCallback((value) => {
    setValue(`${mainName}.material.type`, value);
  }, []);
  const layers = useWatch({
    control,
    name: `${mainName}.Layers.count`,
  });
  const onChangeLayerCount = useCallback((value) => {
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
  }, []);
  const SolderMaskColor = useWatch({
    name: `${mainName}.SolderMaskColor`,
    control,
  });
  const onChangeSolderMaskColor = useCallback((value) => {
    setValue(`${mainName}.SolderMaskColor`, value);
  }, []);

  const [EdgeConnectorType, EdgeConnectorBevelling, EdgeConnectorEnabled] =
    useWatch({
      control,
      name: [
        `${mainName}.EdgeConnector.type`,
        `${mainName}.EdgeConnector.Bevelling`,
        `${mainName}.EdgeConnector.enabled`,
      ],
    });
  const onChangeValueWithinEdgeConnector = useCallback(
    (name = "enabled", value) => {
      const PropName = `${mainName}.EdgeConnector.${name}`;
      setValue(PropName, value);
    },
    []
  );
  return (
    <PCBSelectionContext.Provider
      value={{
        boardType: {
          values: { boardType, board_X_out_Allowance, board_Break_away_rail },
          onChangeBoardType,
          onChangeValueWithinBoardType,
        },
        material: { onChangeMaterialType, materialType },
        layers: { count: layers, onChangeLayerCount },
        solderMaskColor: { color: SolderMaskColor, onChangeSolderMaskColor },
        EdgeConnector: {
          values: {
            type: EdgeConnectorType,
            Bevelling: EdgeConnectorBevelling,
            enabled: EdgeConnectorEnabled,
          },
          onChangeValueWithinEdgeConnector,
        },
      }}
    >
      {children}
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
export const useSolderMaskColor = () => {
  const values = useContext(PCBSelectionContext);
  return values.solderMaskColor;
};
export const useLayers = () => {
  const values = useContext(PCBSelectionContext);
  return values.layers;
};
export const usePcbSelectionStoredValues = () => {
  return useContext(PCBSelectionContext);
};
export const useEdgeConnector = () => {
  const values = useContext(PCBSelectionContext);
  return values.EdgeConnector;
};
