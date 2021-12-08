import 'package:flutter/material.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/home/components/author_with_image.dart';
import 'package:mobile/views/home/components/post_brief_info.dart';
import 'package:mobile/views/home/components/post_card_footer.dart';
import 'package:provider/provider.dart';

class PostCard extends StatelessWidget {
  final Post post;

  const PostCard({
    Key? key,
    required this.post,
  }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<ValueNotifier<bool>>(
        create: (context) => ValueNotifier<bool>(false),
        builder: (context, widget) {
          final _isFavoriteProvider = Provider.of<ValueNotifier<bool>>(
            context,
            listen: post.isFavorite,
          );
          return Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              AuthorWithImage(
                post: post,
                mode: AuthorWithImageMode.light,
                size: AuthorWithImageSize.small,
              ),
              PostBriefInfo(post: post),
              PostCardFooter(
                post: post,
                isFavoriteProvider: _isFavoriteProvider,
              ),
            ],
          );
        });
  }
}
