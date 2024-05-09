import { motion } from 'framer-motion';

import ReverseTriangleIcon from '@/assets/icon/ReverseTriangleIcon';
import { colors } from '@/styles/theme/color';
import { Typography } from '../typography/Typography';

interface ToolTipProps {
  title: string;
}

export const ToolTip = ({ title }: ToolTipProps) => {
  return (
    <motion.div
      className="relative w-fit px-3 py-2 flex items-center justify-center bg-primary-100 rounded-xl "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Typography type="section1" className="text-priamry-400">
        {title}
      </Typography>
      <div className="absolute bottom-[-9px]">
        <ReverseTriangleIcon width={14} height={10} fill={colors.primary[100]} />
      </div>
    </motion.div>
  );
};

// <motion.div
// key="modal"
// initial={{ opacity: 0 }}
// animate={{ opacity: 1 }}
// exit={{ opacity: 0 }}
// >
// {children}
// </motion.div>
