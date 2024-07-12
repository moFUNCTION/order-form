import { StyleSheet, Document, Page, View, Text } from "@react-pdf/renderer";

export const PdfViewer = ({ category = "Standard" }) => {
  const styles = StyleSheet.create({
    page: {
      padding: 30,
      display: "flex",
      flexDirection: "column",
      backgroundColor: "rgba(255, 239, 213, 0.308)",
      borderRadius: "10px",
    },
    section: {
      marginBottom: 10,
      display: "flex",
      flexDirection: "column",
    },
    heading: {
      fontSize: 20,
      marginBottom: 10,
      fontWeight: "bold",
      borderBottom: "2px gray solid",
      paddingBottom: "7px",
    },
    subHeading: {
      fontSize: 16,
      marginBottom: 8,
      fontWeight: "bold",
    },
    text: {
      fontSize: 14,
      marginBottom: 4,
      backgroundColor: "rgba(220, 220, 220, 0.218)",
      borderRadius: "5px",
      padding: "10px",
    },
  });

  if (category === "Standard") {
    const data = JSON.parse(localStorage.getItem("standard-catgeory-form"));
    return (
      <Document style={{ width: "100%" }}>
        <Page style={styles.page}>
          <Text style={styles.heading}>Order Pdf</Text>
          <View id="PCB selection" style={styles.section}>
            <Text style={styles.heading}>PCB Specification Selection</Text>
            <Text style={styles.subHeading}>
              Board Type: {data.PCB_Specification_Selection.BoardType.type}
            </Text>
            <Text style={styles.text}>
              Different Design in Panel:{" "}
              {data.PCB_Specification_Selection.Different_design_in_panel}
            </Text>
            <Text style={styles.text}>
              Layers: {data.PCB_Specification_Selection.Layers.count}
            </Text>
            <Text style={styles.text}>
              Material Type: {data.PCB_Specification_Selection.material.type}
            </Text>
            <Text style={styles.text}>
              FR4 TG: {data.PCB_Specification_Selection.material.FR4_TG}
            </Text>
            <Text style={styles.text}>
              Thermal Conductivity:{" "}
              {data.PCB_Specification_Selection.material.Thermal_conductivity}
            </Text>
            <Text style={styles.text}>
              Rogers: {data.PCB_Specification_Selection.material.Rogers}
            </Text>
            <Text style={styles.text}>
              MCPCB Structure:{" "}
              {data.PCB_Specification_Selection.material.MCPCB_Structure}
            </Text>
            <Text style={styles.text}>
              Thermoelectric Separation:{" "}
              {data.PCB_Specification_Selection.material
                .Thermoelectric_separation
                ? "Yes"
                : "No"}
            </Text>
            <Text style={styles.text}>
              Thickness: {data.PCB_Specification_Selection.material.Thickness}
            </Text>
            <Text style={styles.text}>
              Min Track Spacing:{" "}
              {data.PCB_Specification_Selection.minTrackSpacing}
            </Text>
            <Text style={styles.text}>
              Min Hole Size: {data.PCB_Specification_Selection.minHoleSize}
            </Text>
            <Text style={styles.text}>
              Solder Mask Color:{" "}
              {data.PCB_Specification_Selection.SolderMaskColor}
            </Text>
            <Text style={styles.text}>
              Silk Screen Color:{" "}
              {data.PCB_Specification_Selection.silkScreenColor}
            </Text>
            <Text style={styles.text}>
              UV Printing Multi Color:{" "}
              {data.PCB_Specification_Selection.UV_printing_Multi_color}
            </Text>
            <Text style={styles.text}>
              Edge Connector Enabled:{" "}
              {data.PCB_Specification_Selection.EdgeConnector.enabled}
            </Text>
            <Text style={styles.text}>
              Bevelling:{" "}
              {data.PCB_Specification_Selection.EdgeConnector.Bevelling}
            </Text>
            <Text style={styles.text}>
              Edge Connector Type:{" "}
              {data.PCB_Specification_Selection.EdgeConnector.type}
            </Text>
            <Text style={styles.text}>
              Surface Finish: {data.PCB_Specification_Selection.Surface_finish}
            </Text>
            <Text style={styles.text}>
              Via Process: {data.PCB_Specification_Selection.ViaProcess}
            </Text>
            <Text style={styles.text}>
              Finished Copper: {data.PCB_Specification_Selection.FinisedCopper}
            </Text>
            <Text style={styles.text}>
              Use Customizes Services And Advanced Option:{" "}
              {data.PCB_Specification_Selection
                .useCustomizesServicesAndAdvancedOption
                ? "Yes"
                : "No"}
            </Text>
            <Text style={styles.text}>
              Remove Product: {data.PCB_Specification_Selection.RemoveProduct}
            </Text>
            <Text style={styles.text}>
              Size: {data.PCB_Specification_Selection.Size.x} x{" "}
              {data.PCB_Specification_Selection.Size.y}
            </Text>
            <Text style={styles.text}>
              Quantity: {data.PCB_Specification_Selection.Quantity}
            </Text>
            <Text style={styles.text}>
              Special Request: {data.PCB_Specification_Selection.specialRequest}
            </Text>
          </View>

          <View id="SMD stencil section" style={styles.section}>
            <Text style={styles.heading}>SMD Special</Text>
            <Text style={styles.text}>
              IsEnabled: {data.SMD_Stecial.isEnabled ? "Yes" : "No"}
            </Text>
            {data.SMD_Stecial.isEnabled && (
              <>
                <Text style={styles.text}>
                  Stencil Type: {data.SMD_Stecial.Stencil_type}
                </Text>
                <Text style={styles.text}>Size: {data.SMD_Stecial.Size}</Text>
                <Text style={styles.text}>
                  Stencil Side: {data.SMD_Stecial.Stencil_Side}
                </Text>
                <Text style={styles.text}>
                  Thickness: {data.SMD_Stecial.Thickness}
                </Text>
                <Text style={styles.text}>
                  Existing Fiducials: {data.SMD_Stecial.ExistingFiducials}
                </Text>
                <Text style={styles.text}>
                  Electropolishing:{" "}
                  {data.SMD_Stecial.Electropolishing ? "Yes" : "No"}
                </Text>
                <Text style={styles.text}>
                  Multi Level Step Stencil:{" "}
                  {data.SMD_Stecial.Multi_level_Step_stencil ? "Yes" : "No"}
                </Text>
                <Text style={styles.text}>
                  Quantity: {data.SMD_Stecial.Quantity}
                </Text>
                <Text style={styles.text}>
                  Other Special Request:{" "}
                  {data.SMD_Stecial.Other_Special_Request}
                </Text>
              </>
            )}
          </View>

          <View id="Assemply section" style={styles.section}>
            <Text style={styles.heading}>Assembly Services</Text>
            <Text style={styles.text}>
              IsEnabled: {data.AssemplyServices.isEnabled ? "Yes" : "No"}
            </Text>
            {data.AssemplyServices.isEnabled && (
              <>
                <Text style={styles.text}>
                  Options: {data.AssemplyServices.Options}
                </Text>
                <Text style={styles.text}>
                  Board Type: {data.AssemplyServices.BoardType}
                </Text>
                <Text style={styles.text}>
                  Assembly Side: {data.AssemplyServices.AssemplySide}
                </Text>
                <Text style={styles.text}>
                  Quantity: {data.AssemplyServices.Quantity}
                </Text>
                <Text style={styles.text}>
                  Contains Sensitive Components:{" "}
                  {
                    data.AssemplyServices.PayAttention
                      .ContainesSenstiveComponents
                  }
                </Text>
                <Text style={styles.text}>
                  Accept Alternatives Made In China:{" "}
                  {
                    data.AssemplyServices.PayAttention
                      .AcceptAlternativesMadeInChina
                  }
                </Text>
                <Text style={styles.text}>
                  Number Of Unique Parts:{" "}
                  {data.AssemplyServices.OtherParams.NumberOfUniqueParts}
                </Text>
                <Text style={styles.text}>
                  Number Of SMD Parts:{" "}
                  {data.AssemplyServices.OtherParams.NumberOfSmdParts}
                </Text>
                <Text style={styles.text}>
                  Number Of BGA Parts:{" "}
                  {data.AssemplyServices.OtherParams.NumberOfBGAParts}
                </Text>
                <Text style={styles.text}>
                  Total Number Of THT Parts:{" "}
                  {data.AssemplyServices.OtherParams.TotalNumberOfTHTParts}
                </Text>
                <Text style={styles.text}>
                  Depanel Boards:{" "}
                  {data.AssemplyServices.CustomizesServices.DepanelBoards}
                </Text>
                <Text style={styles.text}>
                  Function Test:{" "}
                  {data.AssemplyServices.CustomizesServices.FunctionTest}
                </Text>
                <Text style={styles.text}>
                  Conformal Coating:{" "}
                  {data.AssemplyServices.CustomizesServices.ConformalCoating}
                </Text>
                <Text style={styles.text}>
                  Firmware Loading:{" "}
                  {data.AssemplyServices.CustomizesServices.FirmwareLoading}
                </Text>
                <Text style={styles.text}>
                  Pressfit Parts:{" "}
                  {data.AssemplyServices.CustomizesServices.PressfitParts}
                </Text>
                <Text style={styles.text}>
                  Box Build Assembly:{" "}
                  {data.AssemplyServices.CustomizesServices.BoxBuildAssembly}
                </Text>
                <Text style={styles.text}>
                  Cable Wire Harness Assembly:{" "}
                  {
                    data.AssemplyServices.CustomizesServices
                      .CableWireHarnessAssembly
                  }
                </Text>
                <Text style={styles.text}>
                  SMT Custom Packaging:{" "}
                  {data.AssemplyServices.CustomizesServices.SMTCustompackaging}
                </Text>
                <Text style={styles.text}>
                  Xray Test: {data.AssemplyServices.CustomizesServices.XrayTest}
                </Text>
                <Text style={styles.text}>
                  Number Of XRays:{" "}
                  {data.AssemplyServices.CustomizesServices.NumberOfXRays}
                </Text>
              </>
            )}
          </View>
        </Page>
      </Document>
    );
  } else if (category === "Assemply") {
    const data = JSON.parse(localStorage.getItem("assemply-catgeory-form"));
    return (
      <Document style={{ width: "100%" }}>
        {/* Assembly Services Page */}
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.heading}>Assembly Services</Text>
            <Text style={styles.subHeading}>Selected Option:</Text>
            <Text style={styles.text}>{data.AssemplyServices.Options}</Text>
            <Text style={styles.subHeading}>Board Type:</Text>
            <Text style={styles.text}>{data.AssemplyServices.BoardType}</Text>
            <Text style={styles.subHeading}>Assembly Side:</Text>
            <Text style={styles.text}>
              {data.AssemplyServices.AssemplySide}
            </Text>
            <Text style={styles.subHeading}>Quantity:</Text>
            <Text style={styles.text}>{data.AssemplyServices.Quantity}</Text>
            <Text style={styles.subHeading}>
              Contains Sensitive Components:
            </Text>
            <Text style={styles.text}>
              {data.AssemplyServices.PayAttention.ContainsSenstiveComponents}
            </Text>
            <Text style={styles.subHeading}>
              Accept Alternatives Made in China:
            </Text>
            <Text style={styles.text}>
              {data.AssemplyServices.PayAttention.AcceptAlternativesMadeInChina}
            </Text>
            <Text style={styles.subHeading}>Number of Unique Parts:</Text>
            <Text style={styles.text}>
              {data.AssemplyServices.OtherParams.NumberOfUniqueParts ||
                "Not specified"}
            </Text>
            <Text style={styles.subHeading}>Number of SMD Parts:</Text>
            <Text style={styles.text}>
              {data.AssemplyServices.OtherParams.NumberOfSmdParts ||
                "Not specified"}
            </Text>
            <Text style={styles.subHeading}>Number of BGA Parts:</Text>
            <Text style={styles.text}>
              {data.AssemplyServices.OtherParams.NumberOfBGAParts ||
                "Not specified"}
            </Text>
            <Text style={styles.subHeading}>Total Number of THT Parts:</Text>
            <Text style={styles.text}>
              {data.AssemplyServices.OtherParams.TotalNumberOfTHTParts ||
                "Not specified"}
            </Text>
            <Text style={styles.subHeading}>Depanel Boards:</Text>
            <Text style={styles.text}>
              {data.AssemplyServices.CustomizesServices.DepanelBoards}
            </Text>
            <Text style={styles.subHeading}>Function Test:</Text>
            <Text style={styles.text}>
              {data.AssemplyServices.CustomizesServices.FunctionTest}
            </Text>
            <Text style={styles.subHeading}>Conformal Coating:</Text>
            <Text style={styles.text}>
              {data.AssemplyServices.CustomizesServices.ConformalCoating}
            </Text>
            <Text style={styles.subHeading}>Firmware Loading:</Text>
            <Text style={styles.text}>
              {data.AssemplyServices.CustomizesServices.FirmwareLoading}
            </Text>
            <Text style={styles.subHeading}>Pressfit Parts:</Text>
            <Text style={styles.text}>
              {data.AssemplyServices.CustomizesServices.PressfitParts}
            </Text>
            <Text style={styles.subHeading}>Box Build Assembly:</Text>
            <Text style={styles.text}>
              {data.AssemplyServices.CustomizesServices.BoxBuildAssembly}
            </Text>
            <Text style={styles.subHeading}>Cable Wire Harness Assembly:</Text>
            <Text style={styles.text}>
              {
                data.AssemplyServices.CustomizesServices
                  .CableWireHarnessAssembly
              }
            </Text>
            <Text style={styles.subHeading}>SMT Custom Packaging:</Text>
            <Text style={styles.text}>
              {data.AssemplyServices.CustomizesServices.SMTCustompackaging}
            </Text>
            <Text style={styles.subHeading}>X-ray Test:</Text>
            <Text style={styles.text}>
              {data.AssemplyServices.CustomizesServices.XrayTest ||
                "Not specified"}
            </Text>
          </View>
        </Page>
        {/* PCB Specification Selection Page */}
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.heading}>PCB Specification Selection</Text>
            <Text style={styles.subHeading}>is Enabled:</Text>
            <Text style={styles.text}>
              {data.PCB_Specification_Selection.isEnabled ? "Yes" : "No"}
            </Text>
            {data.PCB_Specification_Selection.isEnabled && (
              <>
                <Text style={styles.subHeading}>Board Type:</Text>
                <Text style={styles.text}>
                  {data.PCB_Specification_Selection.BoardType.type}
                </Text>
                <Text style={styles.subHeading}>
                  Different Design in Panel:
                </Text>
                <Text style={styles.text}>
                  {data.PCB_Specification_Selection.Different_design_in_panel}
                </Text>
                <Text style={styles.subHeading}>Size:</Text>
                <Text style={styles.text}>
                  Width: {data.PCB_Specification_Selection.Size.x}mm, Height:{" "}
                  {data.PCB_Specification_Selection.Size.y}mm
                </Text>
                <Text style={styles.subHeading}>Quantity:</Text>
                <Text style={styles.text}>
                  {data.PCB_Specification_Selection.Quantity}
                </Text>
                <Text style={styles.subHeading}>Layers:</Text>
                <Text style={styles.text}>
                  {data.PCB_Specification_Selection.Layers.count}
                </Text>
                <Text style={styles.subHeading}>Material:</Text>
                <Text style={styles.text}>
                  Type: {data.PCB_Specification_Selection.material.type}
                </Text>
                <Text style={styles.text}>
                  FR4 TG: {data.PCB_Specification_Selection.material.FR4_TG}
                </Text>
                <Text style={styles.text}>
                  Thermal Conductivity:{" "}
                  {
                    data.PCB_Specification_Selection.material
                      .Thermal_conductivity
                  }
                </Text>
                <Text style={styles.text}>
                  Rogers: {data.PCB_Specification_Selection.material.Rogers}
                </Text>
                <Text style={styles.text}>
                  Thickness:{" "}
                  {data.PCB_Specification_Selection.material.Thickness}mm
                </Text>
                <Text style={styles.subHeading}>Min Track Spacing:</Text>
                <Text style={styles.text}>
                  {data.PCB_Specification_Selection.minTrackSpacing}
                </Text>
                <Text style={styles.subHeading}>Min Hole Size:</Text>
                <Text style={styles.text}>
                  {data.PCB_Specification_Selection.minHoleSize}mm
                </Text>
                <Text style={styles.subHeading}>Solder Mask Color:</Text>
                <Text style={styles.text}>
                  {data.PCB_Specification_Selection.SolderMaskColor}
                </Text>
                <Text style={styles.subHeading}>Silk Screen Color:</Text>
                <Text style={styles.text}>
                  {data.PCB_Specification_Selection.silkScreenColor}
                </Text>
                <Text style={styles.subHeading}>Surface Finish:</Text>
                <Text style={styles.text}>
                  {data.PCB_Specification_Selection.Surface_finish}
                </Text>
                <Text style={styles.subHeading}>Via Process:</Text>
                <Text style={styles.text}>
                  {data.PCB_Specification_Selection.ViaProcess}
                </Text>
                <Text style={styles.subHeading}>Finished Copper:</Text>
                <Text style={styles.text}>
                  {data.PCB_Specification_Selection.FinisedCopper}
                </Text>
              </>
            )}
          </View>
        </Page>
      </Document>
    );
  }
};
