import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/Post.dart';
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
      backgroundColor: primaryBackgroundColor,
      appBar: HomeAppBar(
        topTabController: _topTabController,
        topTabs: _topTabs,
      ),
      body: TabBarView(
        controller: _topTabController,
        children: [
          Container(),
          Container(color: Colors.blue),
        ],
      ),
    );
  }
}
