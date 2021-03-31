import React from "react"
import { FaCode, FaAndroid, FaReact } from "react-icons/fa"
export default [
    {
    id: 1,
    icon: <FaReact className="mx-auto mb-6 text-5xl sm:text-6xl lg:text-7xl" />,
    title: "React",
    text: 'Facebook製のUIライブラリ「React」を使用した抽象度、再利用性の高いコーディングを得意としています。',
    },
    {
    id: 2,
    icon: <FaCode className="mx-auto mb-6 text-5xl sm:text-6xl lg:text-7xl" />,
    title: "Web開発",
    text: 'フロントエンド開発だけではなく、Javascriptランタイム「NodeJS」を使用したバックエンド開発も可能です。',
    },
    {
    id: 3,
    icon: <FaAndroid className="mx-auto mb-6 text-5xl sm:text-6xl lg:text-7xl" />,
    title: "アプリ開発",
    text: '「ReactNative」を使用したIOS、Androidの両方に対応したクロスプラットフォームアプリ開発が可能です。',
    },
]