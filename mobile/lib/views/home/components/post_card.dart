import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/home/components/author_with_image.dart';
import 'package:mobile/views/home/components/post_brief_info.dart';
import 'package:mobile/views/home/components/post_card_footer.dart';
import 'package:provider/provider.dart';
import 'package:sizer/sizer.dart';

class PostCard extends StatelessWidget {
  final Post post;

  const PostCard({
    Key? key,
    required this.post,
  }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<ValueNotifier<bool>>(
        create: (context) => ValueNotifier<bool>(post.isFavorite),
        builder: (context, widget) {
          final _isFavoriteProvider = Provider.of<ValueNotifier<bool>>(
            context,
            listen: post.isFavorite,
          );
          return SizedBox(
            height: 130.sp,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Flexible(
                  flex: 1,
                  child: AuthorWithImage(
                    post: post,
                    mode: AuthorWithImageMode.light,
                    size: AuthorWithImageSize.small,
                  ),
                ),
                Flexible(
                  flex: 3,
                  child: PostBriefInfo(post: post),
                ),
                Flexible(
                  flex: 1,
                  child: PostCardFooter(
                    post: post,
                    isFavoriteProvider: _isFavoriteProvider,
                  ),
                )
              ],
            ),
          );
        });
  }
}
