import { Checkbox, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import Thermoelectric_separation_image from "../../../../../../../../Assets/thermoelectric-separation.jpg";
import { useWatch } from "react-hook-form";
export const Thermoelectric_separation = ({ setValue, control, name }) => {
  const Thermoelectric_separation_field = useWatch({ control, name });
  const handleChange = (e) => {
    setValue(name, e.target.checked);
  };
  return (
    <Flex flexWrap="wrap" gap="6" mt="3">
      <TextWithPopOver title="Thermoelectric separation">
        Thermoelectric separation means that the thermally conductive pads on
        the copper substrate and the electrically conductive pads are separated,
        which can help to achieve the best heat conduction and heat dissipation
        effect. Shown as below:
      </TextWithPopOver>
      <Checkbox
        isChecked={Thermoelectric_separation_field}
        onChange={handleChange}
        defaultChecked={false}
      >
        Thermoelectric separation
      </Checkbox>
      <TextWithPopOver color="blue.600" title="e.g.">
        <Image src={Thermoelectric_separation_image} />
      </TextWithPopOver>
    </Flex>
  );
};
