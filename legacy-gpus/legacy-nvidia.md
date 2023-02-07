# Legacy Nvidia

这部分是干什么用的?好吧，相当多的用户一直在想，如果最新的不支持，他们的GPU支持的最高操作系统是什么。列出的gpu有**理论上**的支持，但请记住，除非在[Mac Pro](https://support.apple.com/en-lamr/HT201805)中安装，否则不能保证它们得到支持，但即使这样也不可靠。同时请记住，随着对所支持的设备id进行研究，这个列表可能会发生变化。

还要注意:这些gpu可能需要`InjectNvidia`。OpenCore用户将需要创建一些[EFI字符串](http://forum.netkas.org/index.php?topic=222.0).

对于那些好奇的人来说，我们可以使用这些gpu运行Mojave甚至Catalina。请记住，稳定性没有保证，需要修改macOS文件系统。自担风险:[来源](https://www.insanelymac.com/forum/topic/339035-pre-release-macos-catalina/?page=21&tab=comments#comment-2677545)

## **Fermi 系列 (4xx, 5xx)**

### 支持的最高操作系统: High Sierra (10.13.6)

### 初始支持的操作系统: Lion (10.7)

需要注意的是，虽然macOS High Sierra可能支持Fermi gpu，但用户遇到了稳定性问题。如果你也在经历不稳定，你会想要降级到macOS Sierra。

500 系列:

* GTX 570

400 系列:

* GTX 470

## **Tesla 系列 (1xx, 2xx, 3xx)**

### 支持的最高操作系统: High Sierra (10.13.6)

### 初始支持的操作系统: Leopard (10.5)

与Fermi类似，这些gpu也由High Sierra支持，但通常不会遇到与Fermi在High Sierra中遇到的相同问题。

300 系列:

* GT 340
* GT 330
* GT 320

200 系列:

* GTX 285
* GTX 280
* GTX 275
* GTX 260
* GT 240
* GT 230
* GT 220

100 系列:

* GT 140
* GT 130
* GT 120

## **GeForce 9 (9xxx) 系列**

### 支持的最高操作系统: High Sierra (10.13.6)

### 初始支持的操作系统: Leopard (10.5)

* 9800 GT
* 9600 GT
* 9400 GT
* 9300 GT

## **GeForce 8 (8xxx) 系列**

### 支持的最高操作系统: High Sierra (10.13.6)

### 初始支持的操作系统: Leopard (10.5)

* GeForce 8800

Quadro:

* FX 5600

## **GeForce 7 (7xxx) 系列**

### 支持的最高操作系统: Lion (10.7)

### 初始支持的操作系统: Panther (10.3)

OS X Lion放弃了支持，因为驱动程序只针对32位内核编译。

* 7600 GT
* 7300 GT

Quadro:

* FX 4500

## **GeForce 6 (6xxx) 系列**

### 支持的最高操作系统: Lion (10.7)

### 初始支持的操作系统: Panther (10.3)

* 6600 GT
