import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/home/components/landscape_post_card.dart';
import 'package:sizer/sizer.dart';

class SearchRecommendList extends StatelessWidget {
  const SearchRecommendList({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SliverList(
      delegate: SliverChildListDelegate([
        Padding(
          padding: const EdgeInsets.symmetric(
            horizontal: myPadding,
            vertical: myPadding / 2,
          ),
          child: Row(
            children: [
              Icon(
                FontAwesomeIcons.solidStickyNote,
                color: mySubHeadlineColor,
              ),
              SizedBox(width: 5.sp),
              Text(
                "Recommend for you".toUpperCase(),
                style: TextStyle(
                  color: mySubHeadlineColor,
                  fontFamily: 'Roboto',
                  fontWeight: FontWeight.bold,
                  fontSize: 12.sp,
                ),
              ),
            ],
          ),
        ),
        Column(
          children: posts
              .map(
                (e) => Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: myPadding,
                    vertical: myPadding / 2,
                  ),
                  child: LandscapePostCard(post: e),
                ),
              )
              .toList(),
        ),
      ]),
    );
  }
}
