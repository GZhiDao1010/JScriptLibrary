/**
 * 
 */
package javaFromEntryTtoMaster;

import java.util.Scanner;

/**
 * @author GZhi·Dao
 * @time 2017年2月14日 下午2:04:35
 * @functions 数组
 */
public class FourChapter {
	public double average(int array[]) { // 计算数组平均数
		int count;
		double next, sum = 0, average;
		// 创建一个scanner对象
		Scanner scanner = new Scanner(System.in);
		System.out.println("请输入7天的气温：");
		for (count = 0; count < 7; count++) {
			// 通过Scanner对象获得用户输入
			next = scanner.nextDouble();
			sum += next;
		}
		System.out.println("总和为：" + sum);
		average = sum / 7;
		System.out.println("7天的平均气温为：" + average);

		return average;

	}

	@SuppressWarnings("unused")
	public void shuZhu() { // 数组的创建和访问
		// 声明 -》初始化-》存取
		// 1.声明
		int array1[];// 一组存放int类型的数据
		int[] array2, array3;// 多组
		// 2.分配内存空间
		array1 = new int[5]; // 分配5个存储空间
		int a = array1[1];// 把数组的第一个元素赋值给变量a

		int[] intArray = { 1, 2, 3, 4, 5 };
		for (int i = 0; i < intArray.length; i++) {
			System.out.println("intArray数组中的第" + i + "个值为：" + intArray[i]);
		}
	}

	@SuppressWarnings("unused")
	public void shuZhuChuShiHua() { // 数组初始化
		// 创建一个 byte 类型的数组
		byte[] byteArray = new byte[1];
		// 创建一个 char 类型的数组
		char[] charArray = new char[1];
		// 创建一个 int 类型的数组
		int[] intArray = new int[1];
		// 创建一个 long 类型的数组
		long[] longArray = new long[1];
		// 创建。。。
		float[] floatArray = new float[1];
		double[] doubleArray = new double[1];
		String[] stringArray = new String[1];

		// 打印出各个数组的默认初始化值
		System.out.println("byte=" + byteArray[0]);
		System.out.println("char=" + charArray[0]);
		System.out.println("int=" + intArray[0]);
		System.out.println("long=" + longArray[0]);
		System.out.println("float=" + floatArray[0]);
		System.out.println("double=" + doubleArray[0]);
		System.out.println("String=" + stringArray[0]);
	}

	public void mingLingHanCanShu(String[] args) {// 获取命令行的参数

		System.out.println("共接受到：" + args.length + "个参数");

		for (int i = 0; i < args.length; i++) {
			System.out.println("第" + i + "个参数的值为：" + args[i]);
		}
	}

	public void shuZhuKaoBei() { // 证明数组拷贝，数组都指向同一个数组
		int[] array1 = { 1, 2, 3 };
		int[] array2 = { 4, 5, 6 };
		System.out.println("2个数组的初始值为：");
		for (int i = 0; i < array1.length; i++) {
			System.out.println("array1[" + i + "]=" + array1[i]);
		}
		System.out.println("-------分割线--------");
		for (int i = 0; i < array2.length; i++) {
			System.out.println("array2[" + i + "]=" + array2[i]);
		}
		array1 = array2;
		System.out.println("数组拷贝后的2个数组的值：");
		for (int i = 0; i < array1.length; i++) {
			System.out.println("array1[" + i + "]=" + array1[i]);
		}
		for (int i = 0; i < array2.length; i++) {
			System.out.println("array2[" + i + "]=" + array2[i]);
		}
		// 改变array2的值，arrary1同时也改变
		System.out.println("改变array2的值，arrary1同时也改变:");
		array2[0] = 10;
		System.out.println("array1[0]=" + array1[0]);
		System.out.println("array2[0]=" + array2[0]);
	}

	public void shuZhuPinJie() { // 2个数组的拼接
		int[] a = { 1, 2, 3 };
		int[] b = { 4, 5, 6, 7, 8 };
		System.arraycopy(a, 0, b, 2, 2); // 从a从第0个开始，拷贝到b第2个开始，a的第二个元素为结束
		System.out.println("b数组拼接后的值为：" + b);
		for (int i = 0; i < b.length; i++) {
			System.out.print(b[i] + "**");
		}

	}

	@SuppressWarnings("unused")
	public void shuZhuPinJie2() { // 数组a拷贝到数组b的尾部
		int[] array1 = { 1, 2, 3 };
		int[] array2 = new int[10];
		for (int i = 0; i < 3; i++) {
			array2[i] = 10 * i;
		}
		System.arraycopy(array1, 0, array2, 3, array1.length);
		for (int i = 0; i < array2.length; i++) {
			System.out.println("array2[" + i + "]=" + array2[i]);
		}
	}

	@SuppressWarnings("unused")
	public void paiXuSuanFa() { // 选择排序算法
		int[] intArray = { 1, 3, 5, 6, 1, 9, 2 };
		int keyValue;
		int index;
		int temp;
		System.out.println("排序前的数组：");
		for (int i = 0; i < intArray.length; i++) {
			System.out.println("intArray[" + i + "]=" + intArray[i]);
		}
		for (int i = 0; i < intArray.length; i++) {
			index = i;
			keyValue = intArray[i];
			for (int j = i; j < intArray.length; j++) {
				if (intArray[j] < keyValue) {
					index = j;
					keyValue = intArray[j];
				}
			}
			temp = intArray[i];
			intArray[i] = intArray[index];
			intArray[index] = temp;
		}
		System.out.println("排序后的数组：");
		for (int i = 0; i < intArray.length; i++) {
			System.out.println("intArray[" + i + "]=" + intArray[i]);
		}
	}

	public static void main(String[] args) {
		FourChapter fourChapter = new FourChapter();
		// double a = fourChapter.average(null);
		// System.out.println("平均值为：" + a);

		// fourChapter.average(null);
		// fourChapter.mingLingHanCanShu(args);
		fourChapter.paiXuSuanFa();

	}

}
