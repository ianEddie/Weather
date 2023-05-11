import { loaderAnimate } from '../Animations/animations'
import { loaderIcon } from '../Icons/icons'
import { motion } from 'framer-motion'
//
export function Loader () {
  return (
    <motion.img src={loaderIcon} alt='loader' {...loaderAnimate} />
  )
}
