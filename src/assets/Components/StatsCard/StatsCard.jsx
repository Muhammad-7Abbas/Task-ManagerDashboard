import {
  StatsWrapper,
  IconBox,
  StatsNumber,
  StatsLabel,
} from "./StatsCard.styles"

function StatsCard({ icon, number, label, borderColor, bgColor }) {
  return (
    <StatsWrapper $borderColor={borderColor}>
      <IconBox $bgColor={bgColor}>{icon}</IconBox>
      <div>
        <StatsNumber>{number}</StatsNumber>
        <StatsLabel>{label}</StatsLabel>
      </div>
    </StatsWrapper>
  )
}

export default StatsCard