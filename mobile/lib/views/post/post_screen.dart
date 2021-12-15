import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/post/components/post_app_bar.dart';
import 'package:mobile/views/post/components/post_body.dart';
import 'package:mobile/views/post/components/post_footer.dart';
import 'package:mobile/views/post/components/post_nav_bar.dart';
import 'package:mobile/views/post/components/post_list_tags.dart';
import 'package:provider/provider.dart';

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
              if (_scrollController.position.maxScrollExtent ==
                  _scrollController.position.pixels) {
                _isScrollingDownProvider.value = true;
              } else if (_scrollController.position.userScrollDirection ==
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
                      PostBody(post: post),
                      PostListTags(post: post),
                      const SizedBox(height: myPadding),
                      PostFooter(post: post),
                    ],
                  ),
                ),
                Consumer<ValueNotifier<bool>>(
                  builder: (context, provider, child) => PostAppBar(
                    isAppBarVisibleProvider: _isScrollingDownProvider,
                  ),
                ),
                Consumer<ValueNotifier<bool>>(
                  builder: (context, provider, child) => PostNavBar(
                    isNavBarVisibleProvider: _isScrollingDownProvider,
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
