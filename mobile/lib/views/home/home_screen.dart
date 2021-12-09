import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/home/components/home_app_bar.dart';
import 'package:mobile/views/home/components/list_view_post_cards.dart';

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
      backgroundColor: myMainColor,
      body: NestedScrollView(
          headerSliverBuilder: (context, innerBoxIsScrolled) => [
                HomeAppBar(
                  topTabController: _topTabController,
                  topTabs: _topTabs,
                  innerBoxIsScrolled: innerBoxIsScrolled,
                ),
              ],
          body: MediaQuery.removePadding(
            removeTop: true,
            context: context,
            child: TabBarView(
              controller: _topTabController,
              children: const [
                ListViewPostCards(),
                ListViewPostCards(),
              ],
            ),
          )),
    );
  }
}
