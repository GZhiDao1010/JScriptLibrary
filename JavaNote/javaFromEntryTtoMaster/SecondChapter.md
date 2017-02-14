/**
 * 
 */
package javaFromEntryTtoMaster;

/**
 * @author GZhi·Dao
 * @time 2017年2月14日 上午8:56:35
 * @functions Java基本语言
 */
public class SecondChapter {

	public double ymj(double num) { // 计算圆的面积
		final double PI = 3.1416;
		int R = 10;
		double ymj = PI * R * R;
		return ymj;
	}

	public void fuDian() { // 定义浮点类型
		float f = 1.23f; // 单精度
		double d1 = 1.23;// 不带后缀的双精度
		double d2 = 1.23D;// 带后缀的双精度
		System.out.println("单精度浮点类型数值等于" + f);
		System.out.println("双精度浮点类型数值等于" + d1);
		System.out.println("双精度浮点类型数值等于" + d2);

	}

	public void ziFu() { // 字符类型
		char a = 'A';
		char b = '\u003a'; // Unicode表示字符 ，有0-65535个值"
		System.out.println("第一个字符类型的值=" + a);
		System.out.println("第二个字符类型的值 =" + b);
	}

	@SuppressWarnings("unused")
	public void ziDonZhuanHuan() { // 数据类型--自动转换:从低位数转换为高位数
		short s = 3;// short类型
		int i = s;// short类型转换为int类型
		float f = 1.01f;// float类型
		double d1 = f;// float转换为double
		long I = 234l;// long类型
		double d2 = I;// long转化为double
		System.out.println("short 自动类型转换为 int 后的值等于" + i);
		System.out.println("float 自动类型转换为 double 后的值等于" + d1);
		System.out.println("long 自动类型转换为 double 后的值等于" + d2);

		char c1 = 'a'; // 定义一个 char 类型
		int i1 = c1; // char 自动类型转换为 int 字符类型也可以自动转换为 int 类型
		System.out.println("char 自动类型转换为 int 后的值等于" + i1);
		char c2 = 'A'; // 定义一个 char 类型
		int i2 = c2 + 1; // char 类型和 int 类型计算
		System.out.println("char 类型和 int 类型计算后的值等于" + i2);
	}

	public void qianZhiZhuanHuan() { // 数据类型--强制转换:从高位数转换为低位数：就是大范围转小范围
		// 固定语法：(type) value
		// 影响：数值很大时，可能会造成数据丢失
		int i = 12312313;
		byte b = (byte) i;
		System.out.println("int强制转换为byte类型的值为：" + b);
		int i1 = 128; // 定义一个 int 类j型
		byte b1 = (byte) i1; // 强制类型转换为 byte
		System.out.println("int 强制类型转换 byte 后值等于" + b1);
		double d = 123.456; // 定义一个 double 类型
		int i2 = (int) d; // 强制类型转换为 int
		System.out.println("double 强制类型转换 int 后值等于" + i2);
	}

	public void yinHanQiangZhi() { // 隐含强制类型转换
		byte i = 127;
		byte i2 = (byte) 13213546;// 系统自动完成转换 ,数值长度太长时需要强制转换
		System.out.println("系统自动完成转换：" + i);
	}

	public void weiYunSuanFu() { // 位运算符
		// 就是对数据的比特位进行操作，只能用于整数类型 ：4中类型 $、 |、 ^ 、~
		int a = 6;
		int b = 5;
		int i = a & b; // 运行顺序：a和b转换为二进制表示，然后进行位运算操作
		System.out.println("执行与位运算符后的结果为：" + i);
	}

	public void yiWeiYunSuanFu() { // 移位运算符
		// 只能对整数类型操作，包括： 左移<< 、 右移>> 、无符号右移 >>>
		int i = 6 << 1;
		System.out.println("6左移1位的值等于：" + i); // 12

	}

	public void sanYuanYunSuan() {// 三元运算
		int i, k;
		i = 5;
		k = (i >= 0 ? i : -i);
		System.out.println("三元运算的结果K：" + k);
	}

	public static void main(String[] args) {
		SecondChapter sChapter = new SecondChapter();

		// double yjmz = sChapter.ymj(33);
		// System.out.print("圆的面积=" + yjmz);

		// sChapter.fuDian();
		// sChapter.ziFu();
		// sChapter.ziDonZhuanHuan();
		sChapter.sanYuanYunSuan();

	}

}
