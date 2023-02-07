# Intel GPUs

所以我们将讨论英特尔cpu中兼容的igpu。需要注意的主要问题是，您需要将framebuffer补丁应用到您的系统中，以使系统正常工作。[请参考这篇文章获得更多关于framebuffer补丁的信息，因为它深入讨论了如何让您的系统运行](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md).我们还将排除Pentiums、Celerons和Atom cpu中的igpu，因为这些通常从未得到原生支持，需要相当多的额外工作才能使它们工作(更具体地说，基于GT1的igpu不能工作，苹果只在其mac上使用GT2和以上)。

**DRM问题**:使用Haswell和较新的iGPUs, DRM在macOS Catalina上完全崩溃。这包括iTunes电影，Apple TV+， Amazon Prime和Netflix，唯一的解决方法是获得支持的dGPU，最好是Polaris或更新的。

更多信息:

* [WhateverGreen的DRM图表](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.Chart.md)

## Native Intel iGPUs

### **Ivy Bridge 3XXX**

#### 最高支持的操作系统: Big Sur (11)

#### 最初支持的操作系统: Lion (10.7)

HD4000原生支持macOS大苏尔，支持macOS蒙特利。另一方面，HD 2500在Mojave中只支持部分快速同步功能。因为HD 2500不支持硬件加速，你需要一个兼容的dGPU来显示。

支持的iGPUs:

* HD 2500
* HD 4000
* HD P4000

Framebuffer:

* AAPL,ig-platform-id (桌面):
  * 0x0166000A (默认)
    * 0A006601 (十六进制交换)
  * 0x01620005
    * 05006201 (十六进制交换)
* AAPL,ig-platform-id (笔记本电脑):
  * 0x01660004 (推荐，1600x900或更高屏幕)
    * 04006601 (十六进制交换)
  * 0x01660009 (可选，eDP或自动检测)
    * 09006601 (十六进制交换)
  * 0x01660003 (1366 x768屏幕)
    * 03006601 (十六进制交换)

需要的kext:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)
* [英特尔Framebuffer补丁指南](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md)

### **Haswell 4XXX**

#### 最高支持的操作系统: Monterey (12)

#### 最初支持的操作系统: Mountain Lion (10.8)

这里支持大多数igpu，只有一个需要关注的是HD 4400，它需要一个带有WhateverGreen的仿冒ID或修改过的ACPI路径。

支持的iGPUs:

* HD 4200
* HD 4400 (这款iGPU需要HD 4600的仿冒ID)
* HD 4600
* HD 5000
* HD 5100
* HD P4600 (理论上)
* HD P4700 (理论上)

Framebuffer:

* AAPL,ig-platform-id (桌面):
  * 0x0D220003 (默认)
    * 0300220D (十六进制交换)
* AAPL,ig-platform-id (笔记本电脑):
  * 0x0A160000 (默认)
    * 0000160A (十六进制交换)
  * 0x0A260005 (recommended)
    * 0500260A (十六进制交换)

需要的kext:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)
* [英特尔Framebuffer补丁指南](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md)

### **Broadwell 5XXX**

#### 最高支持的操作系统: Monterey (12)

#### 最初支持的操作系统: Yosemite (10.10.2)

这里支持所有igpu，没有问题需要报告。

支持的iGPUs:

* HD 5300
* HD 5500
* HD 5600
* HD 6000
* HD 6100
* HD 6200
* HD P5700 (理论上)
* Iris Pro P6300

Framebuffer:

* AAPL,ig-platform-id (桌面):
  * 0x16220007 (默认)
    * 07002216 (十六进制交换)
* AAPL,ig-platform-id (笔记本电脑):
  * 0x16260006 (默认)
    * 06002616 (十六进制交换)

需要的kext:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)
* [英特尔Framebuffer补丁指南](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md)

### **Skylake 6XXX**

#### 最高支持的操作系统: Ventura (13)*

#### 最初支持的操作系统: El Capitan (10.11.4)

::: tip macOS Ventura 注意

macOS Ventura放弃对Skylake igpu的支持。然而，由于Skylake和Kaby Lake igpu如此相似，Skylake igpu可以被欺骗为Kaby Lake，以利用Kaby Lake kext，这些kext仍然存在于文图拉。使用WhateverGreen v1.6.1及以上版本，将你的`device-id`和`AAPL,ig-platform-id`更改为与Kaby Lake最相似的型号，如果使用相同的EFI引导Monterey及以下版本，将`-igfxsklaskbl`添加到你的引导参数中。

:::

这里支持大多数igpu(不包括HD 510)，没有问题要报告。

支持的iGPUs:

* HD 515
* HD 520
* HD 530
* HD P530
* Iris 540
* Iris 550
* Iris Pro 580
* Iris Pro P555
* Iris Pro P580

Framebuffer:

* AAPL,ig-platform-id (桌面):
  * 0x19120000 (默认)
    * 00001219 (十六进制交换)
  * 0x19120001 (Headless)
    * 01001219 (十六进制交换)
* AAPL,ig-platform-id (笔记本电脑):
  * 0x19160000 (默认)
    * 00001619 (十六进制交换)

需要的kext:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)
* [英特尔Framebuffer补丁指南](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md)

### **Kaby Lake 7XXX**

#### 最高支持的操作系统: Current/Ventura (13)

#### 最初支持的操作系统: Sierra (10.12.6)

这里支持大多数igpu，奔腾G4560中的HD 610除外。

支持的iGPUs:

* HD 615
* HD 620
* HD 630
* Iris Plus 640
* Iris Plus 650

Framebuffer:

* AAPL,ig-platform-id (桌面):
  * 0x59160000 (默认)
    * 00001659 (十六进制交换)
  * 0x59120003 (Headless)
    * 03001259 (十六进制交换)
* AAPL,ig-platform-id (笔记本电脑):
  * 0x591B0000 (默认)
    * 00001B59 (十六进制交换)

需要的kext:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)
* [英特尔Framebuffer补丁指南](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md)

### **Kaby Lake Refresh/Coffee Lake/Coffee Lake Refresh/Whiskey Lake/Comet Lake 8XXX/9XXX/10XXX**

#### 最高支持的操作系统: Current/Ventura (13)

#### 最初支持的操作系统: High Sierra(10.13.6)

这里支持大多数igpu(除了i5-10200H中的UHD 610)，但请注意[i3-8100和i3-8350K使用不同的UHD 630(184着色器单元vs 192)](https://en.wikipedia.org/wiki/Intel_Graphics_Technology#Kaby_Lake_Refresh_/_Amber_Lake_/_Coffee_Lake_/_Whiskey_Lake) ，而其他CPU家族需要欺骗以支持High Sierra。

支持:

* UHD 615
* UHD 617
* UHD 620
* UHD 630
* Iris Plus 645
* Iris Plus 655

Framebuffer:

* AAPL,ig-platform-id (桌面):
  * 0x3EA50000 (默认)
    * 0000A53E (十六进制交换)
  * 0x3E9B0007 (桌面,推荐)
    * 07009B3E (十六进制交换)
  * 0x3E920003 (Headless)
    * 0300923E (十六进制交换)
* AAPL,ig-platform-id (笔记本电脑):
  * 0x3EA50009 (默认)
    * 0900A53E (十六进制交换)

需要的kext:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)
* [英特尔Framebuffer补丁指南](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md)

### **Ice Lake 10XXX**

#### 最高支持的操作系统: Current/Ventura (13)

#### 最初支持的操作系统: Catalina(10.15.4)

从macOS 10.15.4开始，这里介绍的大多数igpu都支持(除了不支持的“UHD Graphics”G1)。

支持：

* Iris Plus G7
* Iris Plus G4

Framebuffer:

* AAPL,ig-platform-id (笔记本电脑):
  * 0x8A520000 (默认)

需要的kext:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)
* [英特尔Framebuffer补丁指南](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md)

## 不支持的 Intel iGPUs

这里列出的所有gpu都是基于gt1的，这意味着没有任何支持。

### **Braswell**

#### 最高支持的操作系统: 无

不支持：

* HD 400
* HD 405

### **Skylake**

#### 最高支持的操作系统: 无

不支持：

* HD 510

### **Apollo Lake**

#### 最高支持的操作系统: 无

不支持：

* HD 500
* HD 505

### **Kaby Lake**

#### 最高支持的操作系统: 无

不支持：

* HD 610

### **Kaby Lake Refresh/Coffee Lake/Coffee Lake Refresh/Whiskey Lake/Comet Lake 8XXX/9XXX/10XXX**

#### 最高支持的操作系统: 无

不支持：

* UHD 610

### **Gemini Lake**

#### 最高支持的操作系统: 无

不支持：

* UHD 600
* UHD 605

### **Ice Lake 10XXX**

#### 最高支持的操作系统: 无

不支持：

* UHD Graphics (G1)

以下gpu是基于Xe的，**任何**版本的macOS都不支持:

### **Tiger Lake/Rocket Lake**

#### 最高支持的操作系统: 无

不支持这些cpu的所有igpu，因为它们是基于Xe的。

不支持的卡包括:

* UHD Graphics for 11th Gen Intel Processors
* Intel Xe Graphics

### **Alder Lake/Rocket Lake**

#### 最高支持的操作系统: Non无e

不支持这些cpu的所有igpu，因为它们是基于Xe的。

不支持的卡包括:

* UHD Graphics for 12th Gen Intel Processors
* Intel Xe Graphics

### **Raptor Lake**

#### 最高支持的操作系统: 无

不支持这些cpu的所有igpu，因为它们是基于Xe的。

不支持的卡包括:

* UHD Graphics for 13th Gen Intel Processors
* Intel Xe Graphics

### Discrete GPUs

#### 最高支持的操作系统: 无

所以英特尔最终做了一个离散GPU。Lmao。所有这些都是没有支持的。

不支持的卡包括:

##### Alchemist

* Arc A310
* Arc A380
* Arc A580
* Arc A750
* Arc A770 (8GB/16GB)
* Arc A350M
* Arc A370M
* Arc A550M
* Arc A730M
* Arc A770M
* Arc A30M
* Arc A40
* Arc A50
