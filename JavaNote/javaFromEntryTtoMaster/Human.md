/**
 * 
 */
package javaFromEntryTtoMaster;

/**
 * @author GZhi·Dao
 * @time 2017年2月15日 上午10:58:50
 * @functions 人
 */
class Human {
	String name;
	String sex;
	int age;
	String address;

	public void work() {
		System.out.println("i am working....");
	}

	public void eat() {
		System.out.println("i am eating....");
	}

	String getState(int time) {
		String state = null;
		if (time >= 0 && time <= 24) {
			if (time > 8 && time < 17)
				state = "我在working";
			else if (time > 17 && time < 22)
				state = "我在leaning...";
			else if (time > 22 || time < 7)
				state = "我是sleep...";

		} else {
			state = "错误时间";
		}
		return state;

	}
}
