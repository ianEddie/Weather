import { motion } from 'framer-motion'
import { signAnimate } from '../Animations/animations'
export function Sign () {
  return (
    <motion.p className='text-red-100 font-primary bg-red-900/60 py-3 px-5 rounded-full' {...signAnimate}>City not Found</motion.p>
  )
}
