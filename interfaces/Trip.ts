import Ping from '@/interfaces/Ping'
import Trajectory from '@/interfaces/Trajectory'

export default interface Trip {
	trajectory: Trajectory
	points: Ping[]
}