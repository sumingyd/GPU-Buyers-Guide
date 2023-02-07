# 引导标志

这一小部分是一个简短的解释一些更常用的引导标志，用于让你的GPU工作。请注意，大多数引导标志来自[WhateverGreen](https://github.com/acidanthera/WhateverGreen) 因此请参阅他们的 [FAQ](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/) 以获得引导标志的完整列表。关于所有l `shikigva引导参数`的列表，请参见[这里](https://github.com/acidanthera/WhateverGreen/blob/master/WhateverGreen/kern_shiki.hpp#L35-L74) 和DRM引导标志可以在这里找到:[WhateverGreen的DRM图表](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.Chart.md)

## AMD 引导参数

* `shikigva=40` + `shiki-id=Mac-7BA5B2D9E42DDD94`
  * 将boardID与imacpro1,1进行互换
  * 允许Polaris, Vega和Navi gpu处理所有类型的渲染，对于需要iGPU的SMBIOS很有用
  * 参见这里了解更多信息:[修复DRM](https://sumingyd.github.io/OpenCore-Post-Install/universal/drm.html#testing-hardware-acceleration-and-decoding)
* `radpg=15`
  * 修正了HD 7730/7750/7770/R7 250/R7 250X的初始化
* `-raddvi`
  * 修复了290X、370等的DVI `连接类型`
* `-radvesa`
  * 强制GPU进入VESA模式(没有GPU加速)，有助于故障排除
  * 苹果的内置版本是`-amd_no_dgpu_accel`
* `agdpmod=vit9696`
  * 禁用`board-id`检查，在完成启动后屏幕变黑时可能需要启用
* `agdpmod=pikera`
  * 将`board-id`重命名为`board-ix`，有效地禁用了boardID检查，这是基于Pike.RA的的作品[在这里](https://pikeralpha.wordpress.com/2015/11/23/patching-applegraphicsdevicepolicy-kext/)
  * 由于框架与x6000驱动程序的差异，这对于所有Navi gpu也是必需的

## Nvidia 引导参数

* `nvda_drv=1`
  * 拒绝死亡的启动标志，**停止使用它**。用于启用macos Sierra之前的Nvidia网络驱动程序，但由于它被移动到NVRAM变量而不再工作。
    * 对于Clover来说，在config.plist的`System Parameters`下使用`NvidiaWeb`。
    * 对于OpenCore，在config.plist中使用`NVRAM -> Add -> 7C436110-AB2A-4BBB-A880-FE41995C9F82 -> nvda_drv: <31>`。
  * Sierra和High Sierra的网络驱动程序还支持另一个名为`nvda_drv_vrl=1`的引导参数，这实际上与之前版本中的`nvda_drv=1`所做的事情相同
* `nv_disable=1`
  * 强制GPU进入VESA模式(没有GPU加速)，用于故障排除和安装Nvidia的网络驱动程序时。这是macOS的标志，所以不需要WEG。
* `shikigva=40`
  * 与iMac14、2交换boardID
  * 适用于不期望Nvidia GPU的SMBIOS，但是WhateverGreen应该自己处理补丁
* `shikigva=1`
  * 当您想要将iGPU的显示与dGPU一起使用时，它允许iGPU处理硬件解码，即使不使用无连接的framebuffer
* `shikigva=4`
  * 需要在比Haswell更新的系统上支持硬件加速的视频解码，可能需要使用`shikigva=12`来为所需的进程打补丁
* `agdpmod=vit9696`
  * 禁用`board-id`检查，在完成启动后屏幕变黑时可能需要启用
* `agdpmod=pikera`
  * 将`board-id`转换为`board-ix`，用于禁用字符串比较，这对非imac13、2/iMac14、2 SMBIOS非常有用

## Intel 引导参数

* `-wegnoegpu`
  * 禁用除iGPU之外的所有gpu，对于Nvidia希望运行Mojave+的用户来说最重要
* `-igfxnohdmi`
  * 禁用显示端口到HDMI音频转换
* `-cdfon`
  * 为启用HDMI 2.0支持而打许多补丁
* `-igfxvesa`
  * 强制GPU进入VESA模式(没有GPU加速)，用于故障排除
* `igfxonln=1`
  * 强制所有显示在线，有助于解决10.15.4+在咖啡和彗星湖上的屏幕唤醒问题
* `igfxfw=2`
  * 允许为igpu加载苹果的GUC固件，需要第9代或更新的芯片组(如Z390)
  * 参见这里了解更多信息:[修复DRM](https://sumingyd.github.io/OpenCore-Post-Install/universal/drm.html#testing-hardware-acceleration-and-decoding)
