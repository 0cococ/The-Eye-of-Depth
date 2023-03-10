# -机器暴力破解  


![whirl_05cc094a1a80ccece57108eefdb218111d3c0e47_1 png_tplv-obj](https://user-images.githubusercontent.com/108533707/224318481-84d12a28-bfd9-4b9e-9620-131e40cf97c3.png)![whirl_05cc094a1a80ccece57108eefdb218111d3c0e47_2 png_tplv-obj](https://user-images.githubusercontent.com/108533707/224318483-3fad7f71-232f-4fbb-8a7b-e1b6dfbd9269.png)


验证成功机制是：通过旋转使它们重合完成验证。

识别原理:小圆大圆相交的两侧各取一点对比rgb相似度,相似度70%就行,只取一个点肯定不准确,我们多取几个点,取30个就行,30个成功匹配百分80就可以算成功了
运行:我们利用自动化滑动,一次滑动短距离,然后识别,达到百分80就松手,滑到底还没有匹配成功,我们回到匹配最高的坐标然后松手


![image](https://user-images.githubusercontent.com/108533707/224315562-e2496aad-96a6-4aa9-80b9-23ee11f9fa1c.png)
