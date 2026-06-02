import {
  ProgressWrapper,
  SectionTitle,
  PercentageText,
  ProgressTrack,
  ProgressFill,
  BarStats,
  TitleRow,
  StatItem
} from "./ProgressBar.styles"
import { FiCheckCircle, FiRefreshCw, FiList } from "react-icons/fi"

function ProgressBar({ completed, inProgress, total, percentage }) {
  return (
    <ProgressWrapper>
      <TitleRow>
        <SectionTitle>Overall Progress</SectionTitle>
        <PercentageText>{percentage}%</PercentageText>
      </TitleRow>
      <ProgressTrack>
        <ProgressFill $percentage={percentage} />
      </ProgressTrack>
      <BarStats>
        <StatItem>
          <FiCheckCircle color="#4ADE80" size={14} />
          Completed: {completed}
        </StatItem>
        <StatItem>
          <FiRefreshCw color="#FACC15" size={14} />
          In Progress: {inProgress}
        </StatItem>
        <StatItem>
          <FiList color="#7C5CFC" size={14} />
          Total: {total}
        </StatItem>
      </BarStats>
    </ProgressWrapper>
  )
}

export default ProgressBar