# 应该避免使用哪些gpu

要避免使用gpu，这有点复杂——要100%避免使用的特定品牌是Powercolor, HIS和VisionTek，不管它们运行的是什么核心。它们是最常见的有不稳定问题的gpu，许多用户在Clover启动屏幕之外根本无法获得任何视频，这使得macOS几乎无法安装。XFX也应该避免，如果你可以，因为人们也有麻烦，尽管大多数XFX卡将与CSM/legacy模式关闭(XFX卡与VBIOS有问题，但UEFI的VBIOS是好的)(虽然可以得到XFX RX 460/560与VBIOS flash工作，这是有风险的，不建议)。虽然蓝宝石可能是北极星gpu的最佳品牌，但织造星gpu则完全不同。虽然许多用户使用Sapphire Vega运行系统，但也有相当一部分用户在macOS正常运行时遇到了不稳定和问题。**更新**:随着macOS 10.14.5的出现，对Sapphire Vega的支持得到了极大的提升。但请注意，这些问题相当严重，所以要小心行事，因为所有问题可能都没有真正解决

大多数550将**不能**工作，除了一些型号，如[蓝宝石脉冲550 640 SP](https://www.sapphiretech.com/en/consumer/pulse-rx-550-2g-g5-1), 因为大多数其他550是Lexa core，而640 SP的变体是Polaris。更多信息见下文

::: details Baffin 和 Lexa Breakdown

如上所述，rx550模型有两种口味，即Baffin和Lexa。macOS官方支持前者，但后者没有。这里我们有一个简单的分类，解释如何确定哪个GPU是Baffin，哪个是Lexa，即使oem没有公开提及。

**规格差异**:

* **旧的Lexa核心(不兼容)**:

  * Stream Processors 512 (CUs 8)
  * Memory Speed 1750MHz (7000Mz effective)
  * Reference Clock 1183MHz

* **更新的Baffin核心(兼容)**

  * Stream Processors 640 (CUs 10)
  * Memory Speed 1500MHz (6000Mz effective)
  * Reference Clock 1071MHz

**PCI ID差异**:

* [设备ID为0x67ff](https://devicehunt.com/view/type/pci/vendor/1002/device/67FF)的卡应该支持OOB
  * 设备ID 0 x699f = RX 550 512 sp
  * 设备ID 0x67ff Rev FF = RX 550 640SP
  * 设备ID 0x67ff Rev CF = RX 560

[来自cat2devnull收集这些信息](https://github.com/dortania/bugtracker/issues/129)

:::

对于那些想知道为什么这个列表与[Tonymacx86的买家指南](https://www.tonymacx86.com/buyersguide/building-a-customac-hackintosh-the-ultimate-buyers-guide/#AMD_Graphics_Cards)相矛盾的人，请记住，他们的底线是让用户通过他们的联盟计划购买硬件。这也是推荐Pascal gpu的网站[Mojave发布5个月后](https://web.archive.org/web/20190213211919/https://www.tonymacx86.com/buyersguide/building-a-customac-hackintosh-the-ultimate-buyers-guide/)，你真的会相信一个既不更新又提供[野兽工具](https://github.com/khronokernel/Tonymcx86-stance)的网站吗?

**MSI Navi用户注意事项**:

* 10.15.X以下的安装程序目前有一个VBIOS bug，如果MSI Navi卡存在，安装程序会崩溃。这个问题可以通过在GPU的DeviceProperties中注入任意值的`ATY,Rom#`来解决。参见这里了解更多详细信息:[安装程序不与5700xt# 901工作](https://github.com/acidanthera/bugtracker/issues/901)
* MSI 的 Polaris 和 Vega line are 不受此bug影响

## Powercolor

### **避免vega和Polaris型号**

* [PowerColor Red Devil RX VEGA 56/64](https://www.powercolor.com/product?id=1511340918)
* [PowerColor Red Dragon/Devil RX 580](https://www.powercolor.com/products?id=1492658578&type=1493173705)
* [PowerColor Red Dragon RX 560/570](https://www.powercolor.com/products?id=1492658578&type=1493173679)

## XFX

### **避免vega和590/560/460型号**

* [XFX Reference RX Vega 56/64](http://xfxforce.com/en-us/products/amd-radeon-vega#*)
* [XFX Vega 56 Double Dissipation](http://xfxforce.com/en-us/products/amd-radeon-vega/amd-radeon-rx-vega-56-hbm2-8gb-3xdp-hdmi-double-dissipation-rx-vegaldff6)
* [XFX RX 590 Fatboy](http://xfxforce.com/en-us/products/amd-radeon-rx-500-series#*)
* [XFX RX 580/570](http://xfxforce.com/en-us/products/amd-radeon-rx-500-series#*)
* [XFX RX 560](http://xfxforce.com/en-us/products/amd-radeon-rx-500-series#*)
* [XFX RX 460](http://xfxforce.com/en-us/products/amd-radeon-rx-400-series#*)

## HIS

### **避免所有型号**

* [HIS RX 580 IceQ X² OC](http://www.hisdigital.com/gb/product2-943.shtml)
* [HIS RX 570 IceQ X² OC](http://www.hisdigital.com/gb/product2-945.shtml)
* [HIS RX 560 iCooler OC](http://www.hisdigital.com/un/product2-958.shtml)

## VisionTek

### **避免所有型号**

* [VisionTek RX 590 OC Limited Edition](https://www.visiontek.com/radeon-rx-590-oc-limited-edition.html)
* [VisionTek OCPC RX 580](https://www.visiontek.com/ocpc-radeon-rx-580-8gb-gddr5-metallic-shroud.html)
* [VisionTek RX 560 Overclocked](https://www.visiontek.com/radeon-rx-560-2gb-gddr5-oc.html)
