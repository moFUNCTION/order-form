export const CustomizeServicesOptions = [
  {
    name: "hidPlatedHalfHole",
    label: "Half-cut/Castellated holes",
    description:
      "PTH holes or vias that are cutted through to create a partial or half hole to form an opening into the side of the hole barrel. Generally they are used for mounting a PCB to another one.",
    imgSrc:
      "https://pcbwayfile.s3.us-west-2.amazonaws.com/web/240614/Half-cut-img.png",
  },
  {
    name: "hidSidePlating",
    label: "Edge plating",
    description:
      "PCB edge plating refers to the metallization of the sides of a printed circuit board across its height. You can carry out edge plating on just one of the board edges or all round. Through edge plating，your equip the board with a reliable connection and rigidity.",
  },
  {
    name: "hidImpedanceControl",
    label: "Impedance control",
    description:
      "Conductors in a PCB carry various signals, and to increase their transmission speed, their frequency must be raised. However, factors such as etching, layer thickness, and line width can cause impedance variations in the PCB, leading to signal distortion. Therefore, for high-speed PCB conductors, their impedance values should be controlled within a certain range, known as 'impedance control'. The impedance tolerance is generally ±10%. If impedance requirements are specified in the documentation but not selected in the order, it will be regarded as ignoring the impedance requirement.",
  },
  {
    name: "hidHalogenFree",
    label: "Halogen-free",
    description:
      "According to the JPCA-ES-01-2003 standard, a copper-clad laminate with a chlorine (Cl) content and bromine (Br) content of less than 0.09% Wt (by weight) each and the total amount of CI+Br is ≤ 0.15% [1500PPM] is defined as a halogen-free copper-clad laminate.",
  },
  {
    name: "hidCustomStackup",
    label: "Custom stackup",
    description:
      "Apply to multilayer PCBs only. If you need to customize a specific stack-up, please upload the stack-up file together or contact your sales representative.",
  },
  {
    name: "hidCarbonMask",
    label: "Carbon ink",
    description:
      "Also called carbon oil PCB. Carbon ink PCB is coated on the PCB substrate with carbon-based conductive ink (referred to as carbon ink), cured to form a PCB with a carbon film conductive pattern. Carbon ink PCB has the advantages of low cost, strong impedance control ability, high reliability, and good corrosion resistance.",
  },
  {
    name: "hidViaPadOrViaResin",
    label: "All vias filled with resin and capped",
    description:
      "If you check this option, all vias will be filled with resin, then capped and plated cover.",
  },
  {
    name: "hidViaPadNew",
    label: "Via in pad",
    description:
      "If there are via in pad in your design, that is, vias in the SMD pad, check this option and we will perform resin plug, then capped and plated cover.",
  },
  {
    name: "hidPressfitholes",
    label: "Press-fit holes",
    description:
      "Press-fit holes are holes designed to accept components with press-fit pins. The pins are inserted into the holes and then pressed into place to create a secure connection. Tolerance: +/-0.05mm.",
    imgSrc:
      "https://pcbwayfile.s3.us-west-2.amazonaws.com/msgfile/23/04/28/1502019144584t.png",
  },
  {
    name: "hidCountersink",
    label: "Countersink/Counterbore",
    description:
      "The most noted difference between a countersink and counterbore is the size and shape of the screw or the tool which creates the holes in the material. A counterbore hole is deeper and has a square-like shape where the shoulder of the screw head can seat. It also allows for the addition of washers to be used.",
    imgSrc:
      "https://pcbwayfile.s3.us-west-2.amazonaws.com/web/240614/Countersink-img.png",
  },
  {
    name: "hidZaxis",
    label: "Z-axis milling",
    description:
      "It is also known as depth control routing (milling) or level milling. It refers to partial routing in PCB with a variable level elevation at the PCB edge or within PCB.",
    imgSrc:
      "https://pcbwayfile.s3.us-west-2.amazonaws.com/msgfile/23/04/28/1511186704025t.png",
  },
  {
    name: "hidBlackFR4blackcore",
    label: "Black FR4 (black core)",
    description:
      "It belongs to ordinary FR-4 base material and its processing technology is same as FR-4 too. It is black, opaque, shading, and suitable for making LED display PCB and insulation structural parts in instrumentation and optical instruments.",
    imgSrc:
      "https://pcbwayfile.s3.us-west-2.amazonaws.com/web/240614/Cavity-PCB-img.png",
  },
  {
    name: "hidECopperPCB",
    label: "Embedded copper PCB",
    description:
      "Embedded copper PCBs are printed circuit boards that have copper traces embedded within the substrate material. The design of buried copper blocks can be mainly divided into two categories: buried copper blocks and embedded copper blocks. Buried copper blocks refer to copper blocks that are buried with a thickness less than the total thickness of the board, with one side of the copper block flush with the bottom layer and the other side flush with a certain inner layer. Embedded copper blocks refer to copper blocks that are embedded with a thickness close to or equal to the total thickness of the board, with the copper block passing through the top layer. Printed circuit boards with buried or embedded copper blocks have the characteristics of high thermal conductivity, high heat dissipation, and saving board space, which can effectively solve the heat dissipation problem of high-power electronic components.",
    imgSrc:
      "https://pcbwayfile.s3.us-west-2.amazonaws.com/msgfile/23/05/03/1534073808664t.png",
  },
  {
    name: "hidCavityPCB",
    label: "Cavity PCB",
    description:
      "Cavity PCB is a type of PCB that features one or multiple recessed grooves or cavities on its surface. These grooves are created by removing a portion of the board material, leaving behind a depressed area where components can be placed deeper, and finally reducing the overall height of the device. Cavity PCB and back drilling PCB are two different technologies. Back drilling refers to drilling holes for vias, which stops at a certain depth and does not penetrate through the board, while cavity PCB refers to a specific area on the PCB.",
    imgSrc:
      "https://pcbwayfile.s3.us-west-2.amazonaws.com/web/240614/Cavity-PCB-img.png",
  },
  {
    name: "hidSemiFlexPCB",
    label: "Semi-Flex PCB",
    description:
      "Semi-flex PCB is a kind of PCB that can be locally bent on the basis of rigid PCB, which can not only provide the support of rigid PCB, but also achieve local bending according to product requirements, including the bending in 45°, 90°, 180°, meeting the installation performance requirements of various types of 3D assembly.",
    imgSrc:
      "https://pcbwayfile.s3.us-west-2.amazonaws.com/web/240614/Semi-Flex-img.png",
  },
  {
    name: "hidWPHybridPCB",
    label: "Whole/Partially hybrid PCB",
    description:
      "Hybrid PCB utilizes different materials to build the substrate core layers and also the dielectric layers. Rather than using one material, the fabrication of hybrid PCB involves the use of different materials. Different materials are used to combine all positives into the manufacturing process of the PCB and reduce the negatives that a particular material may feature.",
  },
  {
    name: "hidBackplanePCB",
    label: "Back drill PCB",
    description:
      "Back drilling (sometimes called controlled depth drilling or CDD) involves using a drill bit slightly larger in diameter than the PTH to remove the conductive plating or stub from the hole. The back drilled hole should bring down the stub length to 10 mils. If the stubs are greater than 10 mils, then signal reflections will be produced.",
    imgSrc:
      "https://pcbwayfile.s3.us-west-2.amazonaws.com/web/230508/pic2235.png",
  },
];
