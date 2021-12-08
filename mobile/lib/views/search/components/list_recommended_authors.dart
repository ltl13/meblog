import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/author.dart';
import 'package:mobile/views/search/components/author_card.dart';
import 'package:sizer/sizer.dart';

class ListRecommendedAuthors extends StatelessWidget {
  const ListRecommendedAuthors({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SliverList(
      delegate: SliverChildListDelegate(
        [
          Divider(color: myStrokeColor),
          Padding(
            padding: const EdgeInsets.only(
              left: myPadding,
              top: myPadding / 2,
            ),
            child: Text(
              "Who to follow".toUpperCase(),
              style: TextStyle(
                color: mySubHeadlineColor,
                fontFamily: 'Roboto',
                fontWeight: FontWeight.bold,
                fontSize: 12.sp,
              ),
            ),
          ),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(
              children: [
                ...authors.map((e) => AuthorCard(author: e)).toList(),
                const SizedBox(width: myPadding),
              ],
            ),
          ),
          Divider(color: myStrokeColor),
        ],
      ),
    );
  }
}
