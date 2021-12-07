import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/home/components/post_card.dart';
import 'package:mobile/views/home/components/tag.dart';
import 'package:mobile/views/search/components/search_app_bar.dart';
import 'package:mobile/views/search/components/search_box_and_tags.dart';
import 'package:sizer/sizer.dart';

class SearchScreen extends StatelessWidget {
  const SearchScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return CustomScrollView(
      slivers: [
        SearchAppBar(),
        SearchBoxAndTags(),
        SliverList(
          delegate: SliverChildBuilderDelegate(
            (context, index) => Column(
              children: [
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: myPadding),
                  child: PostCard(post: posts[index]),
                ),
                Divider(color: myStrokeColor),
              ],
            ),
            childCount: posts.length,
          ),
        ),
      ],
    );
  }
}
