# NVIDIA GPUs

## 不支持的 NVIDIA GPUs

### **Kepler 系列 (GTX 6xx, 7xx)**

#### 最高支持的操作系统: Big Sur (11)

#### 最初支持的操作系统: Mountain Lion (10.8)

截至Monterey beta 7，开普勒不受支持。它仍然在macOS大苏尔得到支持。用户报告了GTX 650 Ti, 660, 660 Ti的问题，但这是由苹果端不支持GK106内核的驱动程序问题引起的(或相当糟糕的问题似乎是内存泄漏，这也影响真正的mac)。这一代的另一个问题是，作为第一代开普勒销售的低端产品实际上使用了费米核心，但也有相同的型号运行开普勒核心(在GT 640中发现的GF 116 vs GK 107)。**请注意，GTX 745、750和Ti的变体不包括在内，它们不是开普勒。**

支持的卡：

700 系列:

* GTX Titan (GK110 Maxwell core)
* GTX Titan Black (GK110 Maxwell core)
* GTX Titan Z (macOS支持的少数双GPU卡之一，但只会使用一个核心)
* GTX 780 Ti
* GTX 780
* GTX 770
* GTX 760 Ti
* GTX 760
* GT 740 (GK107 variant)
* GT 730 (GK208 variant)
* GT 720
* GT 710 (GK208 variant)

600 系列:

* GTX 690 (另一个与macOS兼容的双GPU卡，但只使用一个核心)
* GTX 680
* GTX 670
* GTX 660 Ti
* GTX 660 (必须运行GK104核心，而不是GK106)
* GTX 650 (GK107 核心)
* GT 640 (GK107/GK208 核心)
* GT 635
* GT 630 (GK107/GK208 核心)

Quadro:

* Quadro K6000
* Quadro K5200
* Quadro K5000
* Quadro K4200
* Quadro K2000D
* Quadro K2000
* Quadro K600
* Quadro K420
* Quadro 410
* NVS 510

需要的kext:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

附加条件：

* `shikigva=40` 启动标志:将boardID切换到iMac14,2以获得更好的Nvidia支持和白名单补丁

### **Lovelace 系列 (RTX 40xx)**

#### 最高支持的操作系统: 无

不幸的是，任何版本的macOS都不支持，因为即使是High Sierra也没有编写驱动程序。没有什么要补充的了。

这些卡包括:

* RTX 4090
* RTX 4080
* RTX 4070 Ti
* RTX 4070

工作站:

* RTX 6000 Ada Generation

数据中心:

* L40

### **Hopper 系列 (H)**

#### 最高支持的操作系统: 无

不幸的是，任何版本的macOS都不支持，因为即使是High Sierra也没有编写驱动程序。没什么可补充的了。

这些卡包括:

* H100

### **Ampere Series (RTX 30xx)**

#### 最高支持的操作系统: None

不幸的是，任何版本的macOS都不支持，因为即使是High Sierra也没有编写驱动程序。没什么可补充的了。

这些卡包括:

* RTX 3090
* RTX 3080 Ti
* RTX 3080
* RTX 3070 Ti
* RTX 3070
* RTX 3060 Ti
* RTX 3060
* RTX 3050

### **Turing 系列 (RTX 20xx, GTX 16xx)**

#### 最高支持的操作系统: 无

不幸的是，任何版本的macOS都不支持，因为即使是High Sierra也没有编写驱动程序。没什么可补充的了。

这些卡包括:

* Titan RTX
* RTX 2080 Ti
* RTX 2080 SUPER
* RTX 2080
* RTX 2070 SUPER
* RTX 2070
* RTX 2060 SUPER
* RTX 2060
* GTX 1660 Ti
* GTX 1660 SUPER
* GTX 1660
* GTX 1650 SUPER
* GTX 1650

Quadro:

* Quadro RTX 8000
* Quadro RTX 6000
* Quadro RTX 5000
* Quadro RTX 4000

### **Volta 系列 (V)**

#### 最高支持的操作系统: High Sierra 17G3025 (10.13.6)*

#### 最初支持的操作系统: High Sierra 17G3025 (10.13.6)*

NVIDIA实际上发布了一个支持Volta的Web驱动程序版本:[387.10.10.15.15.108](https://github.com/dortania/PatcherSupportPkg/blob/master/Universal-Binaries/WebDriver-387.10.10.10.40.140/WebDriver-387.10.10.15.15.108.pkg). 然而，据报道这个版本对一些用户来说不稳定，NVIDIA随后很快将其撤下。从那以后，再没有发布支持Volta的Web驱动程序版本。由于报告的漏洞和NVIDIA已经撤销了这些驱动程序，我们将把它们视为不受支持。

这些卡包括:

* Titan V
* Titan V CEO Edition

Quadro:

* Quadro GV100

::: tip 注意

一些用户报告说，387.10.10.15.15.108版本的Web驱动程序可能支持所有版本的High Sierra。然而，由于NVIDIA仅为17G3025发布了它，因此我们只显式指定该版本。

:::

### **Kepler 系列(GK106 Variants)**

运行GK106内核的gpu有一个不幸的后果，即VRAM泄漏。这意味着在运行这些gpu时，有很高的失真和整体不稳定的可能性，不幸的是，这没有真正的解决方案，因为即使安装Web驱动程序也没有影响。带有该内核的gpu列表可以在[这里](https://www.techpowerup.com/gpu-specs/nvidia-gk106.g186).

第二代 Kepler:

* GT 740 (GK106 variant)

第一代 Kepler:

* GTX 660
* GTX 650 Ti
* GTX 650
* GTX 645

Quadro:

* K4000

### **Fermi rebranded(GF108, GF117 和 GF119)**

#### 最高支持的操作系统: High Sierra (10.13.6)

#### 最初支持的操作系统: Lion (10.7)

由于NVIDIA无法遵守任何命名约定，他们决定基于较旧且不兼容的Fermi架构制作600/700系列卡。

这些卡包括:

* GT 730 (GF108 variant)
* GT 720A
* GT 710 (GF119 variant)
* GT 705
* GT 640 (GF108 and GF116)
* GT 630 (GF108 variant)
* GT 620
* GT 610

### **Pascal 系列 (GTX 10xx)**

#### 最高支持的操作系统: High Sierra (10.13.6)

#### 最初支持的操作系统: Sierra (10.12.4)

我很确定大多数用户都知道Pascal和Maxwell是怎么回事，但我在这里简单提一下。Mojave和以上版本不支持这些卡，但macOS Sierra和High Sierra确实支持这些卡，带有NVIDIA的一些低劣驱动程序和Lilu + WhateverGreen。在High Sierra上安装Web驱动程序之前，请确保从App Store更新到17G14042版本。

支持的卡：

* GTX Titan X (GP 102-400 Pascal core)
* GTX Titan Xp (GP 102-450 Pascal core)
* GTX 1080 Ti
* GTX 1080
* GTX 1070 Ti
* GTX 1070
* GTX 1060(**注意**:Web驱动不支持GP104/GDDR5X变体)
* GTX 1050 Ti
* GTX 1050
* GT 1030
* GT 1010 (理论上可行，但未经证实)

Quadro:

* Quadro GP100
* Quadro P6000
* Quadro P5000
* Quadro P4000
* Quadro P2000
* Quadro P1000
* Quadro P620
* Quadro P600
* Quadro P400

需要的kext:

* [Nvidia's Web Drivers](https://images.nvidia.com/mac/pkg/387/WebDriver-387.10.10.10.40.140.pkg)
* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

附加条件：

* `shikigva=40` 启动标志:将boardID切换到iMac14,2以获得更好的Nvidia支持和白名单补丁
* `nvda_drv_vrl=1` 引导标志:用于启用网络驱动程序

### **Maxwell 系列 (GTX 9xx, 745, 750/Ti)**

#### 最高支持的操作系统: High Sierra (10.13.6)

#### 最初支持的操作系统: Yosemite (10.10.0)

和Pascal的想法一样，尽管命名方案有点奇怪，因为GTX 745,750和750 Ti都是基于麦克斯韦，尽管它们是与开普勒系列一起销售的，所以在购买时要谨慎

支持的卡：

* GTX Titan X (GM200 Maxwell core)
* GTX 980 Ti
* GTX 980
* GTX 970
* GTX 960
* GTX 950
* GTX 750 Ti
* GTX 750
* GTX 745

Quadro:

* Quadro M6000
* Quadro M5000
* Quadro M4000
* Quadro M2000
* Quadro K2200
* Quadro K1200
* Quadro K620

需要的kext:

* [NVIDIA's Web Drivers](https://images.nvidia.com/mac/pkg/387/WebDriver-387.10.10.10.40.140.pkg)
* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

附加条件：

* `shikigva=40` 启动标志:将boardID切换到iMac14,2以获得更好的Nvidia支持和白名单补丁
* `nvda_drv_vrl=1` 引导标志:用于启用网络驱动程序
