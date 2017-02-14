package javaFromEntryTtoMaster;

/**
 * @author GZhi·Dao
 * @time 2017年2月14日 上午10:52:32
 * @functions 控制流程语句
 */
public class ThreeChapter {

	@SuppressWarnings("unused")
	public void zuoYongYu() { // 作用域
		// 两个嵌套块不能声明相同名字的变量
		int n;
		n = 1;
		{
			int k;
			k = 2;
			// int n = 1; // 不能重复声明变量n
			n++;
		}
		// k++;是非法的
		System.out.println("n是合法的：" + n);
	}

	public void print99() { // 99乘法表
		for (int i = 0; i < 10; i++) {
			for (int j = 1; j <= i; j++) {
				System.out.print(j + "*" + i + " = " + i * j + "   ");
				if (j == i) {
					System.out.println("");
				}
			}
		}
	}

	public static void main(String[] args) {
		ThreeChapter tChapter = new ThreeChapter();
		tChapter.print99();
	}

}
