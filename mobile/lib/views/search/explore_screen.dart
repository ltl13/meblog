import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/author.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/home/components/post_card.dart';
import 'package:mobile/views/search/components/author_card.dart';
import 'package:mobile/views/search/components/list_recommended_authors.dart';
import 'package:mobile/views/search/components/search_app_bar.dart';
import 'package:mobile/views/search/components/search_box_and_tags.dart';
import 'package:mobile/views/search/components/search_recommend_list.dart';
import 'package:sizer/sizer.dart';

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
      ],
    );
  }
}
