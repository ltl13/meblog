import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/post/components/post_screen_app_bar.dart';
import 'package:mobile/views/post/components/post_screen_body.dart';
import 'package:mobile/views/post/components/post_screen_footer.dart';
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
    return Material(
      child: ChangeNotifierProvider<ValueNotifier<bool>>(
          create: (context) => ValueNotifier<bool>(false),
          builder: (context, child) {
            final _isFooterVisibleProvider =
                Provider.of<ValueNotifier<bool>>(context, listen: false);
            final _scrollController = ScrollController();

            _scrollController.addListener(() {
              if (_scrollController.position.userScrollDirection ==
                      ScrollDirection.reverse &&
                  _isFooterVisibleProvider.value) {
                _isFooterVisibleProvider.value = false;
              } else if (_scrollController.position.userScrollDirection ==
                      ScrollDirection.forward &&
                  !_isFooterVisibleProvider.value) {
                _isFooterVisibleProvider.value = true;
              }
            });

            return Stack(
              children: [
                const PostScreenAppBar(),
                SingleChildScrollView(
                  child: Column(
                    children: [
                      PostScreenBody(post: post),
                    ],
                  ),
                ),
                Consumer<ValueNotifier<bool>>(
                  builder: (context, provider, child) => PostScreenFooter(
                    isFooterVisibleProvider: _isFooterVisibleProvider,
                  ),
                ),
              ],
            );
          }),
    );
  }
}
