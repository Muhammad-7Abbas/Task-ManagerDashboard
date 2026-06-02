import styled from 'styled-components'
import StatsCard from '../Components/StatsCard/StatsCard.jsx'
import ProgressBar from '../Components/ProgressBar/ProgressBar.jsx'
import TaskList from '../Components/TaskCard/TaskCard.jsx'
import { FiList, FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi'
import { useTasks } from '../context/TaskContext.jsx'

const PageContent = styled.div`
  padding: 28px;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 24px;
`

const WelcomeText = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #F1F1F1;
  margin-bottom: 6px;
`

const SubText = styled.p`
  font-size: 14px;
  color: #A0A0B0;
  margin-bottom: 28px;
`

const Section = styled.div`
  margin-top: 24px;
`

const getGreeting = () => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good Morning 🌅'
  if (hour < 17) return 'Good Afternoon ☀️'
  if (hour < 21) return 'Good Evening 🌆'
  return 'Good Night 🌙'
}


function Dashboard() {

  // ✅ Get tasks from context — no more props needed!
  const { tasks,loading ,deleteTask, toggleTask } = useTasks()

  const totalTasks = tasks.length
  const completed = tasks.filter(t => t.completed).length
  const inProgress = tasks.filter(t => !t.completed).length
  const highPriority = tasks.filter(t => t.priority === 'High').length
  const percentage = totalTasks === 0 ? 0 : Math.round((completed / totalTasks) * 100)

  const statsData = [
    {
      icon: <FiList size={22} color="#7C5CFC" />,
      number: totalTasks,
      label: "Total Tasks",
      borderColor: "#7C5CFC",
      bgColor: "#7C5CFC22"
    },
    {
      icon: <FiCheckCircle size={22} color="#4ADE80" />,
      number: completed,
      label: "Completed",
      borderColor: "#4ADE80",
      bgColor: "#4ADE8022"
    },
    {
      icon: <FiClock size={22} color="#FACC15" />,
      number: inProgress,
      label: "In Progress",
      borderColor: "#FACC15",
      bgColor: "#FACC1522"
    },
    {
      icon: <FiAlertCircle size={22} color="#F87171" />,
      number: highPriority,
      label: "High Priority",
      borderColor: "#F87171",
      bgColor: "#F8717122"
    },
  ]
if (loading) return <div style={{ color: 'white', padding: '28px' }}>Loading tasks...</div>
  return (
    <PageContent>
      <WelcomeText>{getGreeting()}</WelcomeText>
      <SubText>Here's what's happening with your tasks today.</SubText>

      {/* Stats Cards */}
      <StatsGrid>
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            icon={stat.icon}
            number={stat.number}
            label={stat.label}
            borderColor={stat.borderColor}
            bgColor={stat.bgColor}
          />
        ))}
      </StatsGrid>

      {/* Progress Bar */}
      <ProgressBar
        completed={completed}
        inProgress={inProgress}
        total={totalTasks}
        percentage={percentage}
      />

      {/* Recent Tasks — only show first 5 */}
      <Section>
        <TaskList
          tasks={tasks.slice(0, 5)}
          onDelete={deleteTask}
          onToggle={toggleTask}
        />
      </Section>

    </PageContent>
  )
}

export default Dashboard