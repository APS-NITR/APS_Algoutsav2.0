import { motion } from "framer-motion";

const Stats = () => {
    return (
    <div id="stats">
    <motion.div
    className="flex items-center justify-center bg-opacity-0 mt-20 mb-12"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}  >

        <section id="comparison" aria-label="QuickEdit vs traditional editor" className="py-20 sm:py-32 bg-opacity-0">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white sm:text-4xl">About AlgoUtsav 2K24</h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700 dark:text-gray-300">Last year, AlgoUtsav emerged as a remarkable success, solidifying its reputation as one of the leading ICPC-style coding events in India.
            The winners were felicitated with lucrative cash prizes, recognizing their exceptional performance and hard work. AlgoUtsav 2024 not only provided a platform for excellence but also celebrated the talent and determination of budding programmers.
            </p>
        </div>
        <ul role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
            <li>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                    <li>
                        <figure className=" rounded-2xl bg-white dark:bg-gray-900 p-6 text-center shadow-xl shadow-slate-900/10">
                            <blockquote className="p-3">
                                <p className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white">300+</p>
                            </blockquote>
                            <figcaption className="text-center">
                                <div className="font-display text-slate-900 dark:text-white">Teams Participated</div>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </li>
            <li>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                    <li>
                        <figure className="rounded-2xl bg-white dark:bg-gray-900 p-6 text-center shadow-xl shadow-slate-900/10">
                            <blockquote className="p-3">
                                <p className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white">95+</p>
                            </blockquote>
                            <figcaption className="text-center">
                                <div className="font-display text-slate-900 dark:text-white">Colleges
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </li>
            <li>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                    <li>
                        <figure className="rounded-2xl bg-white dark:bg-gray-900 p-6 text-center shadow-xl shadow-slate-900/10">
                            <blockquote className="p-3">
                                <p className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white">1000+</p>
                            </blockquote>
                            <figcaption className="text-center">
                                <div className="font-display text-slate-900 dark:text-white">Participants</div>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</section>

    </motion.div>
    </div>
    )
}

export default Stats;