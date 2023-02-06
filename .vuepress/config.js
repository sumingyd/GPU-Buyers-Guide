const {
    description
} = require('../package')

module.exports = {
    title: '显卡购买指南',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/GPU-Buyers-Guide/',

    watch: {
        $page(newPage, oldPage) {
            if (newPage.key !== oldPage.key) {
                requestAnimationFrame(() => {
                    if (this.$route.hash) {
                        const element = document.getElementById(this.$route.hash.slice(1));

                        if (element && element.scrollIntoView) {
                            element.scrollIntoView();
                        }
                    }
                });
            }
        }
    },

    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-multimd-table'), {
                rowspan: true,
            });
        }
    },

    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        repo: 'https://github.com/sumingyd/GPU-Buyers-Guide',
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: true,
        lastUpdated: '上次更新',
        logo: '/homepage.png',
        nav: [{
            text: '指南菜单',
            items: [
                {
                    text: 'OpenCore安装',
                    link: 'https://sumingyd.github.io/OpenCore-Install-Guide/'
                },
                {
                    text: 'OpenCore安装后',
                    link: 'https://sumingyd.github.io/OpenCore-Post-Install/'
                },
                {
                    text: 'OpenCore多重引导',
                    link: 'https://sumingyd.github.io/OpenCore-Multiboot/'
                },
                {
                    text: '开始使用ACPI',
                    link: 'https://sumingyd.github.io/Getting-Started-With-ACPI/'
                },
                {
                    text: '无线购买指南',
                    link: 'https://sumingyd.github.io/Wireless-Buyers-Guide/'
                },
                {
                    text: '显卡购买指南',
                    link: 'https://sumingyd.github.io/GPU-Buyers-Guide/'
                },
                {
                    text: '避免购买指南',
                    link: 'https://sumingyd.github.io/Anti-Hackintosh-Buyers-Guide/'
                },
            ]
        },
        ],
        sidebar: [{
            title: '介绍',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '',
            ]

        },
        {
            title: '现代gpu',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/modern-gpus/amd-gpu',
                '/modern-gpus/nvidia-gpu',
                '/modern-gpus/intel-gpu',
            ]
        },
        {
            title: '传统gpu',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '/legacy-gpus/legacy-amd',
                '/legacy-gpus/legacy-nvidia',
                '/legacy-gpus/legacy-intel',
            ]
        },
        {
            title: '购买指南',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/buyers-guide/gpu-avoid',
                '/buyers-guide/what-gpu-to-get',
            ]
        },
        {
            title: '杂项',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/misc/bootflag',
                '/misc/discrete-laptops',
                '/misc/common-issues',
                '/misc/kvm',
                'misc/credit',
            ]
        },
        ],
    },
    plugins: [
        ['@vuepress/back-to-top', true],//开启右下角返回顶层图标
        ['@vuepress/nprogress', true],//这个插件将会在你切换页面的时候，在顶部显示进度条。
        ['vuepress-plugin-smooth-scroll', true],//在你的 VuePress 站点中使用平滑滚动。
        ['vuepress-plugin-fulltext-search', true],//基于 Headers 的搜索插件
        ['@vuepress/medium-zoom',{
                selector: ".theme-succinct-content :not(a) > img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }
        ],//这个插件将会使你的图片支持点击缩放。
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
            }
        ],//页面滚动时自动激活侧边栏链接的插件
    ]
}