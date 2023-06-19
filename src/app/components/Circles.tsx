'use client';

import { motion } from 'framer-motion';
import { ComponentPropsWithoutRef } from 'react';

const variants = {
    hidden: {
        opacity: 0,
        outline: 0,
    },
    visible: (custom: number) => ({
        opacity: 1,
        transition: {
            delay: custom / 30,
        },
    }),
};

const groupVariants = {
    hidden: {
        rotate: 0,
    },
    visible: (custom: 'clockwise' | 'anticlockwise') => ({
        rotate: custom === 'clockwise' ? 360 : -360,
        transition: {
            repeat: Infinity,
            duration: 40,
            ease: 'linear',
        },
    }),
};

export function Circles() {
    return (
        <svg
            fill="none"
            height="100%"
            width="100%"
            viewBox="0 0 1014 1014"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Inner circle */}
            <motion.g variants={groupVariants} custom="clockwise">
                <motion.circle
                    cx="506.5"
                    cy="506.5"
                    r="140.75"
                    stroke="url(#paint0_linear_1601_1334)"
                    stroke-width="1.5"
                    custom={0}
                    variants={variants}
                ></motion.circle>
                <motion.circle
                    cx="408.5"
                    cy="407.5"
                    r="10.75"
                    fill="black"
                    strokeWidth="1"
                    stroke="#9ca3af"
                    custom={1}
                    variants={variants}
                ></motion.circle>
            </motion.g>

            <motion.g variants={groupVariants}>
                <motion.circle
                    cx="506.5"
                    cy="506.5"
                    r="231.75"
                    stroke="url(#paint1_linear_1601_1334)"
                    stroke-width="1.5"
                    custom={1}
                    variants={variants}
                ></motion.circle>
                <motion.circle
                    cx="659.5"
                    cy="332.5"
                    r="10.75"
                    className="fill-purple-900"
                    custom={2}
                    variants={variants}
                ></motion.circle>
            </motion.g>

            <motion.g variants={groupVariants} custom="clockwise">
                <motion.circle
                    cx="506.5"
                    cy="506.5"
                    r="377.75"
                    stroke="url(#paint2_linear_1601_1334)"
                    stroke-width="1.5"
                    custom={2}
                    variants={variants}
                ></motion.circle>
                <motion.circle
                    cx="285.5"
                    cy="200.5"
                    r="10.75"
                    className="fill-blue-900"
                    stroke-width="1.5"
                    custom={3}
                    variants={variants}
                ></motion.circle>
                <motion.circle
                    cx="129.5"
                    cy="526.5"
                    r="10.75"
                    fill="black"
                    strokeWidth="1"
                    stroke="#9ca3af"
                    custom={3}
                    variants={variants}
                ></motion.circle>
                <motion.circle
                    cx="882.5"
                    cy="549.5"
                    r="10.75"
                    className="fill-pink-900"
                    custom={3}
                    variants={variants}
                ></motion.circle>
                <motion.circle
                    cx="670.5"
                    cy="165.5"
                    r="10.75"
                    fill="black"
                    strokeWidth="1"
                    stroke="#9ca3af"
                    custom={3}
                    variants={variants}
                ></motion.circle>
            </motion.g>

            <motion.circle
                cx="507"
                cy="507"
                r="506.25"
                stroke="url(#paint3_linear_1601_1334)"
                stroke-width="1.5"
                custom={4}
                variants={variants}
            ></motion.circle>

            <defs>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_1601_1334"
                    x1="506.5"
                    x2="506.5"
                    y1="365"
                    y2="630"
                >
                    <stop stopColor="white" stopOpacity="0.5"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint1_linear_1601_1334"
                    x1="506.5"
                    x2="506.5"
                    y1="274"
                    y2="739"
                >
                    <stop stopColor="white" stopOpacity="0.5"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint2_linear_1601_1334"
                    x1="506.5"
                    x2="506.5"
                    y1="128"
                    y2="847.5"
                >
                    <stop stopColor="white" stopOpacity="0.5"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint3_linear_1601_1334"
                    x1="507"
                    x2="515.5"
                    y1="-2.5332e-7"
                    y2="1014"
                >
                    <stop stopColor="white" stopOpacity="0.5"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
            </defs>
        </svg>
    );
}
