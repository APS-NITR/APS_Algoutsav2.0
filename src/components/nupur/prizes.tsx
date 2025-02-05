'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn, staggerContainer, zoomIn } from '@/lib/motion';

const Feedback = () => (
    <section className="sm:p-16 xs:p-8 px-6 py-12 mt-20">
        {/* Main Heading */}
        <motion.h1 
            variants={fadeIn('down', 'spring', 0.2, 1)}
            initial="hidden"
            whileInView="show"
            className="text-center my-12 pb-9 sm:mb-16"
        >
            <span className="font-extrabold text-transparent text-4xl sm:text-5xl bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                PRIZES
            </span>
        </motion.h1>

        <motion.div
            variants={staggerContainer(0.2, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="w-[100%] mx-auto justify-center flex lg:flex-row flex-col gap-6"
        >
      
            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="lg:max-w-[430px] w-full flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
            >
                <div className="feedback-gradient" />
                <div>
                    <h4 className="font-bold sm:text-[34px] text-[28px] sm:leading-[42px] leading-[38px] text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 whitespace-nowrap">
                        🏆 Team Contest
                    </h4>
                    <div className="mt-6 space-y-6">
                        <div className="bg-[#ffffff08] p-4 rounded-xl">
                            <p className="text-[#FFD700] font-semibold sm:text-[20px] text-[16px]">Winners Prizes Worth</p>
                            <p className="text-white sm:text-[24px] text-[20px] mt-2">₹39,000+</p>
                        </div>
                        <div className="bg-[#ffffff08] p-4 rounded-xl">
                            <p className="text-[#C0C0C0] font-semibold sm:text-[18px] text-[14px]">1st Runners Up</p>
                            <p className="text-white sm:text-[22px] text-[18px] mt-2">₹32,000+</p>
                        </div>
                        <div className="bg-[#ffffff08] p-4 rounded-xl">
                            <p className="text-[#CD7F32] font-semibold sm:text-[16px] text-[12px]">2nd Runners Up</p>
                            <p className="text-white sm:text-[20px] text-[16px] mt-2">₹23,000+</p>
                        </div>
                    </div>
                </div>
                <p className="text-[#ffffffaa] text-xs mt-4">*Prizes include Algoutsav merchandise and stickers.</p>
            </motion.div>

          
            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="relative lg:max-w-[430px] w-full flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A]"
            >
                <div className="feedback-gradient" />
                <div>
                    <h4 className="font-bold sm:text-[34px] text-[28px] sm:leading-[42px] leading-[38px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 whitespace-nowrap">
                    🏆 Individual Contest
                    </h4>
                    <div className="mt-6 space-y-6">
                        <div className="bg-[#ffffff08] p-4 rounded-xl">
                            <p className="text-[#FFD700] font-semibold sm:text-[20px] text-[16px]">Winner Prizes Worth</p>
                            <p className="text-white sm:text-[24px] text-[20px] mt-2">₹24,000+</p>
                        </div>
                        <div className="bg-[#ffffff08] p-4 rounded-xl">
                            <p className="text-[#C0C0C0] font-semibold sm:text-[18px] text-[14px]">1st Runners Up</p>
                            <p className="text-white sm:text-[22px] text-[18px] mt-2">₹19,000+</p>
                        </div>
                        <div className="bg-[#ffffff08] p-4 rounded-xl">
                            <p className="text-[#CD7F32] font-semibold sm:text-[16px] text-[12px]">2nd Runners Up</p>
                            <p className="text-white sm:text-[20px] text-[16px] mt-2">₹13,000+</p>
                        </div>
                    </div>
                </div>
                <p className="text-[#ffffffaa] text-xs mt-4">*Prizes include Algoutsav merchandise and stickers.</p>

             
                <motion.div
                    variants={zoomIn(0.4, 1)}
                    className="lg:block hidden absolute -left-[21%] top-[-10%]"
                >
                    <Image
                        src="/images/stamp.png"
                        alt="stamp"
                        width={155}
                        height={155}
                        className="object-contain"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    </section>
);

export default Feedback;