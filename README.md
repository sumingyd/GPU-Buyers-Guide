# 介绍

[[toc]]

![Ventura image](./images/header.jpg)

又到了每年的这个时候，新版macOS发布了，这个古老的问题将再次被问到:

**macOS Ventura支持哪些gpu ?**

好吧，你来对地方了，我们将简要介绍一下情况，并详细介绍我们推荐的具体gpu。

## 快速复习一下NVIDIA和网络驱动程序

![WebDrivers](./images/WebDrivers.gif)

到目前为止，在撰写本文时，我们已经经历了多个操作系统周期，没有NVIDIA的Maxwell, Pascal, Turing或Ampere gpu的官方驱动程序。这意味着这些gpu的用户无法支持Mojave或更高版本，所以他们只能使用macOS High Sierra。这该怪谁?好吧，这是两个自负的大公司，他们都拒绝合作，所以责任是双向的。请记住，WebDrivers有一个VRAM泄漏的问题，他们还没有解决，所以一个理论，为什么苹果拒绝在macOS的英伟达驱动程序可能是由于英伟达拒绝交出驱动程序堆栈。你觉得AMD和英特尔都有开源驱动程序是巧合吗?不管怎样，都不能改变没有支持的事实。

macOS Monterey不再支持Kepler，这意味着不再支持任何NVIDIA gpu。

对于那些想要阅读的人:[什么时候发布macOS Mojave 10.14的NVIDIA Web驱动程序](https://devtalk.nvidia.com/default/topic/1042520/drivers/-when-will-the-nvidia-web-drivers-be-released-for-macos-mojave-10-14-/post/5358999/#5358999)

很棒的阅读，因为它表明，即使是高层管理也无法为客户提供一个好的答案。

## 所以如果我的GPU是本地支持的，为什么我需要Lilu和WhateverGreen?

这个问题在Hackintosh社区中经常出现，而且有充分的理由。为什么这些gpu可以在Mac上开箱即用，而不能在黑苹果上使用?好吧，原因是PC和mac有不同的内部线路，所以PC中的ACPI布局在不同的情况下不能与macOS很好地工作。为了解决这个问题，我们使用[WhateverGreen](https://github.com/acidanthera/WhateverGreen/releases)和它的伙伴 [Lilu](https://github.com/acidanthera/Lilu/releases)来修补我们的Hackintosh的不同部分，比如重命名设备，协助framebuffer连接，修补音频连接器，允许修改aty\_config, aty\_properties，通过ACPI修改cail\_properties等等。这么大的功能集，而且是由懂行的人开发的，没有理由不使用它。

## 那么我有什么选择呢?

macOS Monterey放弃了对所有NVIDIA gpu的支持，包括基于开普勒的显卡，这意味着AMD专用gpu和英特尔集成gpu是最新版本的唯一选择。

需要记住的事情:

* macOS不支持SLI, Crossfire或多主核gpu(如Radeon Pro Duo)。这种情况可能会随着Mac Pro中Radeon Pro Vega II Duo的发布而改变。
* 通过HDMI/DisplayPort获取音频可能需要额外的applealc.kext和其他一些IOReg编辑
* GPU超频仅限于Vega 10 GPU与 [PyVega](https://github.com/corpnewt/PyVega)
* 将受支持的gpu与不受支持的gpu一起运行可能会产生奇怪的后果，因为不受支持的gpu会运行VESA驱动程序，这可能会破坏macOS中的睡眠和其他功能。请参考[禁用gpu](https://sumingyd.github.io/OpenCore-Install-Guide/extras/spoof.html) 指南了解更多信息。

## 我可以在我的黑苹果中运行不支持的GPU吗?

所以，在macOS中运行一个不受支持的GPU时，当没有真正的驱动程序时，需要记住的是，它将依靠VESA驱动程序。这些都是非常简单的、基于CPU的驱动程序，在你等待安装正确的驱动程序时用作权宜之计，但运行它时，macOS的许多基本功能都被破坏了，包括睡眠和总体稳定性。由于这些GPU即使在Apple之外也没有驱动程序，我们需要一些方法来阻止不支持的GPU在macOS中被识别。有关更多信息，请参阅[禁用gpu](https://sumingyd.github.io/OpenCore-Install-Guide/extras/spoof.html) 指南。

> 我可以在我的iGPU上渲染macOS，在我不支持的GPU上使用视频吗?

不幸的是，不行，原因实际上与NVIDIA的Optimus技术的功能非常相似。你首先需要一种方法来获取/编码iGPU的信号，将其发送给离散的GPU，然后让GPU解码信号并显示它。一个小问题，解码信号需要适当的GPU加速，而你不支持的GPU没有。所以无论如何你都需要使用主板的视频输出端口。
