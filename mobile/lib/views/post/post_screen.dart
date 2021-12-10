import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/explore/components/explore_screen_recommended_list.dart';
import 'package:mobile/views/home/components/tag.dart';
import 'package:mobile/views/post/components/post_screen_app_bar.dart';
import 'package:mobile/views/post/components/post_screen_body.dart';
import 'package:mobile/views/post/components/post_screen_footer.dart';
import 'package:mobile/views/post/components/post_screen_list_tags.dart';
import 'package:provider/provider.dart';
import 'package:sizer/sizer.dart';

class PostScreen extends StatelessWidget {
  final Post post;
  const PostScreen({
    Key? key,
    required this.post,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Material(
        child: ChangeNotifierProvider<ValueNotifier<bool>>(
          create: (context) => ValueNotifier<bool>(true),
          builder: (context, child) {
            final _isScrollingDownProvider =
                Provider.of<ValueNotifier<bool>>(context, listen: false);
            final _scrollController = ScrollController();

            _scrollController.addListener(() {
              if (_scrollController.position.userScrollDirection ==
                      ScrollDirection.reverse &&
                  _isScrollingDownProvider.value) {
                _isScrollingDownProvider.value = false;
              } else if (_scrollController.position.userScrollDirection ==
                      ScrollDirection.forward &&
                  !_isScrollingDownProvider.value) {
                _isScrollingDownProvider.value = true;
              }
            });

            return Stack(
              children: [
                SingleChildScrollView(
                  controller: _scrollController,
                  child: Column(
                    children: [
                      PostScreenBody(post: post),
                      PostScreenListTags(post: post),
                      SizedBox(height: 40.sp),
                      Container(
                        color: myButtonTextColor,
                        width: 100.w,
                        padding: const EdgeInsets.all(myPadding),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              "Author".toUpperCase(),
                              style: TextStyle(
                                color: myMainColor,
                                fontFamily: 'Roboto',
                                fontWeight: FontWeight.bold,
                                fontSize: 12.sp,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                Consumer<ValueNotifier<bool>>(
                  builder: (context, provider, child) => PostScreenAppBar(
                    isAppBarVisibleProvider: _isScrollingDownProvider,
                  ),
                ),
                Consumer<ValueNotifier<bool>>(
                  builder: (context, provider, child) => PostScreenFooter(
                    isFooterVisibleProvider: _isScrollingDownProvider,
                  ),
                ),
              ],
            );
          },
        ),
      ),
    );
  }
}
