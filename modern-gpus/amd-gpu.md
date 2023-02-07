# AMD GPUs

## 原生 AMD GPUs

### **Navi 23 系列**

#### 最高支持的操作系统: Current/Ventura (13)

#### 初始支持的操作系统: Monterey (12.1)

从12.1开始，苹果增加了对RX 6600 XT的支持。

支持的卡:

* RX 6600
* RX 6600 XT

需要的kext:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

### **Navi 21 系列**

#### 最高支持的操作系统: Current/Ventura (13)

#### 初始支持的操作系统: Big Sur (11.4)

从11.4开始，苹果已经添加了Navi 21支持!

支持的卡：

* RX 6800
* RX 6800 XT
* RX 6900 XT
  * WhateverGreen 1.5.2支持XTXH变体(设备ID: `0x73AF`)，并将` Device - ID `伪造为`0x73BF`。

注意:一些Navi 21卡目前需要启动参数`agdpmod=pikera`才能显示。

需要的kext:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

### **Navi 10 系列**

#### 最高支持的操作系统: Current/Ventura (13)

#### 初始支持的操作系统: Catalina (10.15.1)

目前，在10.15.1，苹果终于增加了RDNA和Navi支持!

支持的卡：

* RX 5500
* RX 5500 XT
* RX 5600
* RX 5600 XT
* RX 5700
* RX 5700 XT
* RX 5700 XT 50th Anniversary Edition

Radeon Pro:

* Radeon Pro W5500
* Radeon Pro W5700

注意:大多数Navi卡目前需要启动参数`agdpmod=pikera`才能正确显示。

需要的kext:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

**MSI Navi用户的重要注意事项**:

* Catalina (10.15) 安装程序目前有一个VBIOS bug，如果存在MSI Navi卡，会导致安装程序崩溃。这个问题可以通过在GPU的DeviceProperties中注入任意值的`ATY,Rom#`来解决。请参阅这里的更多细节:[安装程序不与5700xt# 901](https://github.com/acidanthera/bugtracker/issues/901)
* MSI 的 Polaris 和 Vega line are 不受这个bug的影响。

### **Vega 20 系列**

#### 最高支持的操作系统: Current/Ventura (13)

#### 初始支持的操作系统: Mojave (10.14.5)

macOS原生支持所有基于Vega的专用gpu, Mojave开始支持Vega 20 gpu。

支持的卡：

* Radeon VII

需要的kext:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

### **Vega 10 系列**

#### 最高支持的操作系统: Current/Ventura (13)

#### 初始支持的操作系统: High Sierra (10.13)

就像Vega 20一样，Vega 10 gpu在macOS中原生支持，尽管这些卡的支持从High Sierra开始。

对于那些想要超频或欠压的人，请查看 [PyVega](https://github.com/corpnewt/PyVega)

唯一需要**避免使用Vega 10的gpu品牌是XFX**。原因是VBIOS通信问题，由于Vega的powerplay表与操作系统和GPU的交互方式，VBIOS不能轻易地用参考BIOS解决。

支持的卡：

* Vega 64 Liquid
* Vega 64
* Vega 56

Radeon Pro:

* Vega Frontier Edition
* Radeon Pro WX 9100

需要的kext:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

### **Polaris 10 and 20 系列**

#### 最高支持的操作系统: Current/Ventura (13)

#### 初始支持的操作系统: Sierra (10.12)

关于北极星，基本上只要运行北极星或巴芬核心，每种卡的型号都是支持的。 像RX 550这样的低端卡可能运行一个Lexa核心，这意味着在macOS中不支持。

你应该避免使用Polaris系列的唯一品牌是XFX, PowerColour, HIS和VisionTek**，因为许多用户都有引导加载程序和macOS引导问题。其他用户找到了修复/解决方法，尽管没有一致的。这似乎是由于有一个奇怪的VBIOS不能很好地与macOS通信，唯一的解决方案是闪烁另一个VBIOS，这对大多数用户来说不是理想的。

支持的卡：

400 系列:

* RX 480
* RX 470D
* RX 470
* RX 460

500 系列:

* RX 590
* RX 580X
* RX 580
* RX 570X
* RX 570
* RX 560X
* RX 560
* RX 550 (Baffin core)

Radeon Pro:

* WX 7100
* WX 5100
* WX 4100
* E9550

需要的kext:

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

### **R7/R9**

#### 最高支持的操作系统: Monterey (12)

#### 初始支持的操作系统: Yosemite (10.10)

R7/R9也是原生支持的，没有太多问题，但我们不能保证R5和R7卡的成功，因为很少有成功的报道。此外，要注意，与参考设计不同的这些卡有更多的问题，需要大量的工作才能使它们正常运行。蓝宝石卡是你最好的选择。此外，R9 280X/380X在兼容性上也有差强人意之处。

支持的卡：

* R9 Fury X
* R9 Fury
* R9 Nano
* R9 390 （需要仿冒ID）
* R9 290X/390X
* R9 290/390 （需要仿冒ID）
* R9 280X/380X (成功或失败)
* R9 280/380 （需要仿冒ID）
* R9 270X/370X
* R7 270/370 （需要仿冒ID）
* R7 265
* R7 260X/360X
* R9 260/360 (根据型号不同，可能需要仿冒ID)
* R9 255
* R7 250X
* R7 250 （需要仿冒ID）
* R7 240 （需要仿冒ID）

需要的kext

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

附加条件:

* `radpg=15`: 用于HD 7730/7750/7770/R7 250/R7 250X GPU初始化
* `-raddvi` 启动标志:修复DVI，用于290X, 370等
* InjectAMD: 虽然已弃用，但有些用户需要它来进行正确的初始化，除非绝对必要，否则请避免使用
* [重命名gpu(仿冒ID)](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/spoof.html)

### **HD 8000 系列 (8xxx)**

#### 最高支持的操作系统: Monterey (12)

#### 初始支持的操作系统: Mountain Lion (10.8)

* HD 8740
* HD 8760
* HD 8770
* HD 8850
* HD 8870
* HD 8890
* HD 8950
* HD 8970

### **HD 7000 系列 (7xxx)**

#### 最高支持的操作系统: Monterey (12)

#### 初始支持的操作系统: Mountain Lion (10.8)

* Dual AMD FirePro D300
* Dual AMD FirePro D500
* Dual AMD FirePro D700
* FirePro W5100 （需要仿冒ID）
* FirePro W7000
* FirePro W9000
* HD 7700
* HD 7730
* HD 7750
* HD 7770
* HD 7790
* HD 7850
* HD 7870
* HD 7870 XT
* HD 7950
* HD 7970
* HD 7990

需要的kexts

* [Lilu.kext](https://github.com/acidanthera/Lilu/releases)
* [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)

附加条件:

* `radpg=15`: 用于HD 7730/7750/7770/R7 250/R7 250X GPU初始化
* InjectAMD: 虽然已弃用，但一些用户需要这个来正确初始化，除非绝对必要，否则请避免

## 不支持的 AMD GPUs

### **Navi 2X 和 Navi 3X**

#### 最高支持的操作系统: 无

虽然支持Navi 21和Navi 23，但在撰写本文时还不支持基于Navi 22、Navi 24和Navi 3X的显卡。

不支持的卡：

* RX 7900 XTX
* RX 7900 XT
* RX 6750 XT
* RX 6700 XT
* RX 6500 XT
* RX 6400

### **Lexa 系列**

#### 最高支持的操作系统: 无

虽然这些gpu可能与Polaris gpu共享相同的家族名称，但这些卡是截然不同的，这意味着在任何版本的macOS中都不支持。与Navi和不支持的NVIDIA GPU类似，你需要禁用Lexa GPU，因为不支持的GPU的VESA驱动程序在中断睡眠和macOS的其他功能下运行。请参考[禁用gpu](https://sumingyd.github.io/OpenCore-Install-Guide/extras/spoof.html) 指南了解更多信息。

不支持的卡：

* WX 3100
* WX 2100
* RX 550X (Lexa core)
* RX 550 (Lexa core)
* RX 540X
* RX 540

### **AMD APUs (所有型号)**

#### 最高支持的操作系统: 无

遗憾的是，移动设备和低端桌面AMD cpu上的集成gpu从未得到官方支持，社区支持非常缺乏。虽然可以通过一些工作实现显示，但图形加速基本上是不可能的。

不支持的 APUs:

* Vega 11 (Zen)
* Vega 8 (Zen)
* GCN 3 (Excavator Gen 2, Steamroller)
* GCN 2 (Excavator Gen 1, Puma, Puma +)
