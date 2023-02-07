# Legacy Intel

## **Sandy Bridge 2XXX**

### 支持的最高操作系统: High Sierra (10.13.6)

### 最初支持的操作系统: Snow Leopard (10.6)

不幸的是，Mojave放弃了对这些igpu的支持，但幸运的是，我们可以通过使用旧的kext让这些igpu工作(尽管没有Metal支持，所以事情有点不确定)。[OpenCore Legacy补丁程序](https://github.com/dortania/OpenCore-Legacy-Patcher/issues/348) 是添加对这些gpu支持的最佳方式。然而，OCLP是面向真正的mac的，虽然它可以在黑苹果上工作，但没有官方支持。最初的支持在macOS 10.6中引入，[Intel framebuffer补丁指南](https://www.insanelymac.com/forum/topic/334899-intel-framebuffer-patching-using-whatevergreen/?tab=comments#comment-2626271)

支持的iGPUs:

* HD 2000 (只能用于快速同步任务，不能完全加速)
* HD 3000
* HD P3000

Framebuffer

* AAPL,snb-platform-id (桌面):
  * 0x00030010 (默认)
    * 10000300 (十六进制交换)
* AAPL,snb-platform-id (笔记本):
  * 0x00010000 (默认)
    * 00000100 (十六进制交换)

HD 2000所需的文件:

* AppleIntelHDGraphicsFB.kext
* AppleIntelHDGraphicsGA.plugin
* AppleIntelHDGraphicsGLDriver.bundle
* AppleIntelHDGraphicsVADriver.bundle

HD 3000所需的文件::

* AppleIntelHD3000Graphics.kext
* AppleIntelHD3000GraphicsGA.plugin
* AppleIntelHD3000GraphicsGLDriver.bundle
* AppleIntelHD3000GraphicsVADriver.bundle
* AppleIntelSNBGraphicsFB.kext
* AppleIntelSNBVA.bundle

需要的 kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)
* [Intel Framebuffer Patching guide](https://www.insanelymac.com/forum/topic/334899-intel-framebuffer-patching-using-whatevergreen/?tab=comments#comment-2626271)

## **Westmere i3/5/7-xxx**

### 支持的最高操作系统: High Sierra (10.13.6)

### 最初支持的操作系统: Snow Leopard (10.6)

不幸的是，Mojave放弃了对这些igpu的支持，但幸运的是，我们可以通过使用旧的kext让这些igpu工作(尽管没有Metal支持，所以事情有点不确定)。[OpenCore Legacy补丁程序](https://github.com/dortania/OpenCore-Legacy-Patcher/issues/348) 是添加对这些gpu支持的最佳方式。然而，OCLP是面向真正的mac的，虽然它可以在黑苹果上工作，但没有官方支持

* HD Graphics (是的，他们就是这么称呼他们的)

需要的 kexts:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

## **4th Gen GMA**

### 支持的最高操作系统: Lion (10.7)

### 最初支持的操作系统: Leopard (10.5)

Native (Lion):

* GMA X3100

不支持:

* GMA X4500HD
* GMA X4500
* GMA 4500MHD
* GMA 4500
* GMA X3500
* GMA X3000
* GMA 3000

## **3rd Gen GMA**

### 支持的最高操作系统: Lion (10.7)

### 最初支持的操作系统: Tiger (10.4)

Native (Lion):

* GMA 950

加上一点工作 (Snow Leopard):

* GMA 900

不支持:

* GMA 3150
  * 部分支持，参见这里:[Legacy GPU 补丁](https://sumingyd.github.io/OpenCore-Post-Install/gpu-patching/legacy-intel/)
* GMA 3100
