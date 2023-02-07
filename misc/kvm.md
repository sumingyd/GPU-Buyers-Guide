# KVM 配置

对于计划使用KVM(内核虚拟机)配置启动的用户，应注意以下事项:

需要注意的一件非常重要的事情是，基于gcn的AMD gpu会遇到所谓的“重置错误”。这指的是当你关闭macOS虚拟机时，GPU可能会进入一个坏状态，需要主机自己重启。不幸的是，虽然AMD还没有发布一个适当的修复，但有一些可用的选项(注意，它们不是一个大小适合所有，所以它们可能需要一些修补程序):

* [Vega 10/12 修复](https://forum.level1techs.com/t/vega-10-and-12-reset-application/145666)
  * 目前没有修复基于Vega 20的gpu
* [Navi 10 修复](https://forum.level1techs.com/t/navi-reset-kernel-patch/147547)

关于如何避免gpu出现此问题，我们建议如下:

* 尽量遵循参考gpu的设计
  * Sapphire提供AMD的参考gpu，所以他们是首选供应商
* 避免那些经常大量修改VBIOS的oem
  * XFX、PowerColor、HIS和VisionTek是需要避开的主要品牌
* 任何支持UEFI引导的7950/70或280/X
* 任何支持UEFI引导的7850/70或270/X
* 任何基于CGN 1.0且支持UEFI引导的FirePro卡
  * FirePro的W7000、8000、9000和D300、500、700卡
* 任何RX 4XX/5XX蓝宝石卡
  * 常规的Polaris gpu仍然存在问题，所以要密切关注
