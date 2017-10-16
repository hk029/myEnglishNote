# qt数字和字符串

在做qt工程的时候经常会遇到问题就是如何把一个浮点数转换成字符串，我们知道C语言里一sprintf的方法，其实QString也提供了类似的方法number();

```c++
    static QString number(int, int base=10);
    static QString number(uint, int base=10);
    static QString number(long, int base=10);
    static QString number(ulong, int base=10);
    static QString number(qlonglong, int base=10);
    static QString number(qulonglong, int base=10);
    static QString number(double, char f='g', int prec=6);
```



## 浮点数

```c++
static QString number(double, char f='g', int prec=6);
```



## 例子：









```c++
QString strfre = QString::number(freq.Freq_piont);
QString strdis = QString::number(freq.distance,'f',1);  //1位精度
QString strdist= QString::number(freq.disturb,'f',2);  //2位精度
```