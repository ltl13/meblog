import 'package:flutter/material.dart';
import 'package:mobile/views/home/components/post_card_brief_info.dart';
import 'package:mobile/views/home/components/post_card_footer.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/home/components/author_with_image.dart';
import 'package:provider/provider.dart';
import 'package:sizer/sizer.dart';

class LandscapePostCard extends StatelessWidget {
  final Post post;

  const LandscapePostCard({
    Key? key,
    required this.post,
  }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<ValueNotifier<bool>>(
        create: (context) => ValueNotifier<bool>(post.isFavorite),
        builder: (context, widget) {
          return SizedBox(
            height: 110.sp,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Flexible(
                  flex: 1,
                  child: AuthorWithImage(
                    author: post.author,
                    size: AuthorWithImageSize.small,
                  ),
                ),
                Flexible(
                  flex: 2,
                  child: PostCardBriefInfo(post: post),
                ),
                Flexible(
                  flex: 1,
                  child: PostCardFooter(
                    post: post,
                  ),
                )
              ],
            ),
          );
        });
  }
}
