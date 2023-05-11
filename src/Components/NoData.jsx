import { motion } from 'framer-motion'
import { signAnimate } from '../Animations/animations'
//
export function NoData () {
  return (
    <motion.p className='text-white text-sm font-primary bg-black/50 py-2 px-4 rounded-full self-start' {...signAnimate}>City not Found</motion.p>
  )
}
