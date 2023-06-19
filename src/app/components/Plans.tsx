'use client';

import { Light } from '@/components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsCheckLg } from 'react-icons/bs';
import { GiFluffyTrefoil, GiFluffyCloud, GiFluffySwirl, GiAmplitude } from 'react-icons/gi';

const plans = [
    {
        name: 'Basic Plan',
        price: 10,
        Icon: motion(GiFluffySwirl),
        details: [
            'Limited generations (~200 / month)',
            'General commercial terms',
            'Access to member gallery',
            'Optional credit top ups',
            '3 concurrent fast jobs',
        ],
        color: 'text-emerald-400',
        colorHover: 'hover:bg-emerald-100',
        shadowColor: 'shadow-emerald-400',
    },
    {
        name: 'Standard Plan',
        price: 30,
        Icon: motion(GiFluffyCloud),
        details: [
            '15h Fast generations',
            'Unlimited Relaxed generations',
            'General commercial terms',
            'Access to member gallery',
            'Optional credit top ups',
            '3 concurrent fast jobs',
        ],
        color: 'text-blue-400',
        colorHover: 'hover:bg-blue-100',
        shadowColor: 'shadow-blue-400',
    },
    {
        name: 'Premium Plan',
        price: 60,
        Icon: motion(GiFluffyTrefoil),
        details: [
            '30h Fast generations',
            'Unlimited Relaxed generations',
            'General commercial terms',
            'Access to member gallery',
            'Optional credit top ups',
            '3 concurrent fast jobs',
            'Stealth image generation',
        ],
        color: 'text-amber-400',
        colorHover: 'hover:bg-amber-100',
        shadowColor: 'shadow-amber-400',
    },
];

function Plan({
    name,
    price,
    Icon,
    color,
    details,
    colorHover,
    shadowColor,
}: (typeof plans)[number]) {
    return (
        <div
            className={`group flex w-full flex-col items-center justify-between space-y-6 overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-800 p-4 shadow-sm lg:space-y-10 lg:p-8 ${shadowColor}`}
        >
            <div className="flex w-full flex-col space-y-5">
                <div className="flex items-center space-x-2 lg:flex-col lg:space-x-0 lg:space-y-5">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center rounded-full">
                            <GiAmplitude className="h-20 w-20 text-white/10 lg:h-28 lg:w-28" />

                            <motion.div className="absolute h-8 w-8">
                                <Icon className={`flex h-full w-full ${color}`} />
                            </motion.div>
                        </div>
                    </div>
                    <h3 className={`text-lg font-semibold lg:text-2xl ${color}`}>{name}</h3>
                </div>
                <div className="flex items-baseline justify-start">
                    <h2 className="text-xl font-semibold lg:text-3xl">${price}</h2>
                    <p className="text-gray-400">&nbsp;/ month</p>
                </div>
                {details.map((detail) => (
                    <div key={detail} className="flex items-center space-x-1 text-sm text-white/80">
                        {detail && <BsCheckLg className="h-5 w-5" />}
                        <p>{detail}</p>
                    </div>
                ))}
            </div>
            <Link href="https://www.midjourney.com/account" className="w-full">
                <button
                    className={`w-full rounded-full p-3 font-bold outline outline-1 ${color} transition-colors duration-200 ${colorHover}`}
                >
                    Subscribe
                </button>
            </Link>
        </div>
    );
}

export function Plans() {
    return (
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map(({ name, ...other }) => (
                <Plan key={name} name={name} {...other} />
            ))}
        </div>
    );
}
