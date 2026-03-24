const DashedLine = ({ height = "100%", stroke = "#aaa8a0" }) => (
  <svg width="2" height={height}>
    <line
      x1="1"
      y1="0"
      x2="1"
      y2={height}
      stroke={stroke}
      strokeWidth="1.5"
      strokeDasharray="6 10"
      strokeLinecap="round"
    />
  </svg>
);

export default DashedLine;
