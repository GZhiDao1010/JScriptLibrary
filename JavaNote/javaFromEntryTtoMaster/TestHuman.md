/**
 * 
 */
package javaFromEntryTtoMaster;

/**
 * @author GZhi·Dao
 * @time 2017年2月15日 上午11:04:45
 * @functions
 */
public class TestHuman {

	public static void main(String[] args) {
		@SuppressWarnings("unused")
		Human human = new Human();
		human.name = "小强";
		human.age = 27;
		human.sex = "男";
		human.address = "china";
		System.out.println(human.name + "晚上23点你在干嘛啊？");
		System.out.println(human.getState(23));

		System.out.println(FiveChapter.jingTaiFangFa("我是FiveChapterd静态方法"));

	}

}
