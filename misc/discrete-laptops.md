# 笔记本电脑 dGPUs

## 了解离散型笔记本电脑gpu的工作原理

这是一个关于如何确定你的dGPU是否可以在macOS中工作的小节。

## MUX芯片到底是什么?

因此MUX芯片是一个多路复用器，它处理iGPU和dGPU如何路由到内部显示器，而dGPU总是被连接到外部输出，如HDMI和DisplayPort。这是真正的macbook的图形切换功能。

> 那么普通笔记本电脑的问题在哪里?

市场上的大多数笔记本电脑都**没有**这种芯片，而是选择了基于软件的解决方案，如Nvidia Optimus，它实际上会创建一个虚拟窗口，并将dGPUs信号重新路由到iGPU。当你同时运行2个gpu时，这会产生延迟并消耗更多电池，所以苹果的解决方案是最理想的，但不幸的是成本更高，设计更复杂。另一个解决方案意味着在macOS上需要有大量的驱动程序支持来支持Optimus(实际上没有)。[关于这个问题的更多技术信息](https://www.reddit.com/r/hackintosh/comments/6omyzc/nvidia_optimus_really_never_going_to_happen_for/dkj20xt/)

> 那么我如何知道我的笔记本电脑是否有MUX芯片?

这是最困难的部分，因为大多数笔记本厂商甚至不会在任何地方提到它，即使他们有一个，最简单的方法是判断显示屏是否直接绑定到dGPU。主要是Alienware和Razer包括这样的芯片，但大多数制造商为AMD和Nvidia gpu选择较低价格的软件解决方案。

幸运的是，GPU直通网站有一个相当大的列表，列表中有哪些GPU有MUX，以及它们是如何工作的

* [笔记本兼容列表](https://gpu-passthrough.com)

![MUX Configurations](../images/LaptopGPUs.png)

* **注意**:您必须能够将MUX设置为BIOS中的内部显示，或者能够在默认情况下使物理输出与dGPU一起工作。否则,没有软件macOS可以控制你MUX的输出。
