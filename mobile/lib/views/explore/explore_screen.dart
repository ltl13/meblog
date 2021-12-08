import 'package:flutter/material.dart';
import 'package:mobile/views/explore/components/list_recommended_authors.dart';
import 'package:mobile/views/explore/components/list_trending_posts.dart';
import 'package:mobile/views/explore/components/explore_app_bar.dart';
import 'package:mobile/views/explore/components/search_box_and_tags.dart';
import 'package:mobile/views/explore/components/search_recommend_list.dart';

class SearchScreen extends StatelessWidget {
  const SearchScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const CustomScrollView(
      slivers: [
        SearchAppBar(),
        SearchBoxAndTags(),
        SearchRecommendList(),
        ListRecommendedAuthors(),
        ListTrendingPosts(),
      ],
    );
  }
}
