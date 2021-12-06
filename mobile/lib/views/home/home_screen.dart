import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/home/components/home_app_bar.dart';
import 'package:sizer/sizer.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> with TickerProviderStateMixin {
  final List<String> _topTabs = ["Following", "Recommended"];
  late TabController _topTabController;
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _topTabController = TabController(length: _topTabs.length, vsync: this);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: myBackgroundColor,
      appBar: HomeAppBar(
        topTabController: _topTabController,
        topTabs: _topTabs,
      ),
      body: TabBarView(
        controller: _topTabController,
        children: [
          ListView.builder(
            itemCount: posts.length,
            itemBuilder: (context, index) => Column(
              children: [
                Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: myPadding,
                    vertical: myPadding / 2,
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        posts[index].author,
                        style: TextStyle(
                          color: myParagraphColor,
                          fontSize: 12.sp,
                          fontFamily: 'Roboto',
                          fontWeight: FontWeight.normal,
                        ),
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Flexible(
                            flex: 2,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  posts[index].title,
                                  style: TextStyle(
                                    color: myHeadlineColor,
                                    fontSize: 16.sp,
                                    fontFamily: 'Roboto',
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                Text(
                                  posts[index].datePost +
                                      "  •  " +
                                      posts[index].timeReading.toString() +
                                      " min read",
                                  style: TextStyle(
                                    color: mySubHeadlineColor,
                                    fontFamily: 'Roboto',
                                    fontSize: 12.sp,
                                    fontWeight: FontWeight.normal,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          SizedBox(width: 10.sp),
                          Flexible(
                            flex: 1,
                            child: FittedBox(
                              fit: BoxFit.scaleDown,
                              child: Image.asset(posts[index].image),
                            ),
                          ),
                        ],
                      ),
                      Row(
                        children: [
                          TextButton(
                            onPressed: null,
                            style: TextButton.styleFrom(
                              alignment: Alignment.center,
                              padding: const EdgeInsets.symmetric(
                                vertical: 0,
                                horizontal: 5,
                              ),
                              backgroundColor: myMainColor,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(50.sp),
                              ),
                            ),
                            child: Text(
                              "Rock & Roll",
                              style: TextStyle(
                                color: myButtonTextColor,
                                fontFamily: 'Roboto',
                                fontSize: 10.sp,
                                fontWeight: FontWeight.normal,
                              ),
                            ),
                          )
                        ],
                      ),
                    ],
                  ),
                ),
                Divider(color: mySubHeadlineColor, thickness: .5),
              ],
            ),
          ),
          Container(color: Colors.blue),
        ],
      ),
    );
  }
}
