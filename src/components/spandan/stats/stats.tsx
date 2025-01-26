import { motion } from "framer-motion";

const Stats = () => {
    return (
    <motion.div
    className="flex items-center justify-center bg-opacity-0 mt-20 mb-12"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}  >

        <section id="comparison" aria-label="QuickEdit vs traditional editor" className="py-20 sm:py-32 bg-opacity-0">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white sm:text-4xl">The Faster, Affordable, Better
                Solution</h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700 dark:text-gray-300">Discover the advantages of choosing QuickEdit over a
                traditional editor. Say goodbye to delays and elevate your content creation process.</p>
        </div>
        <ul role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
            <li>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                    <li>
                        <figure className=" rounded-2xl bg-white dark:bg-gray-900 p-6 text-center shadow-xl shadow-slate-900/10">
                            <blockquote className="p-3">
                                <p className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white">98%</p>
                            </blockquote>
                            <figcaption className="text-center">
                                <div className="font-display text-slate-900 dark:text-white"> ✅ faster than a traditional editor </div>
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
                                <p className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white">85%</p>
                            </blockquote>
                            <figcaption className="text-center">
                                <div className="font-display text-slate-900 dark:text-white">💰 more affordable than a traditional editor
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
                                <p className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white">120%</p>
                            </blockquote>
                            <figcaption className="text-center">
                                <div className="font-display text-slate-900 dark:text-white">😎 increased efficiency and features</div>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</section>

    </motion.div>
    )
}

export default Stats;