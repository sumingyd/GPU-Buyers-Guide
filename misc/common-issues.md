# 常见GPU问题

## Navi黑屏

这个问题是由于x6000框架中的一些差异，WhateverGreen还没有适应，为了解决这个问题，您需要启动参数`agdpmod=pikera`

## 混合使用不同PCIe生成设备时的GPU加速问题

在X570上运行PCIe 3.0 gpu(如Radeon VII)时，这是最常见的，但在B450上运行Navi gpu时，情况则相反。这是AMD固件中带有自动PCI链路速度配置的一个bug，要解决这个问题，你需要在BIOS中强制指定GPU链路速度而不是自动配置。英特尔固件没有这些问题

## 卡在或靠近 `IOConsoleUsers: gIOScreenLock...`

有一些东西需要验证:

* macOS只能在UEFI支持的gpu上正常工作(GTX 7XX/2013+)
* 无法启用CSM，与UEFI类似
* 强制PCIe 3.0的链接速度在AMD上也很关键

## DRM损坏

**Intel GPU 用户**

* 没有修复，这是由于苹果的iGPU固件的差异

**AMD 和 Nvidia GPU 用户**

* 参见WhateverGreen的[DRM图表](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.Chart.md)

## 在R7/R9 GPU上损坏的GPU加速

关于如何修复加速，请参阅[GPU欺骗指南](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/spoof.html)
