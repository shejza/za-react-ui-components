import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useSpacingProps from "../../utils/spacing-props";
import { color } from "../properties";

import { ReactComponent as flag } from "../assets/flag.svg";
import { ReactComponent as user } from "../assets/user.svg";
import { ReactComponent as user2 } from "../assets/user2.svg";
import { ReactComponent as users } from "../assets/users.svg";
import { ReactComponent as userChecked } from "../assets/user-checked.svg";
import { ReactComponent as userX } from "../assets/user-x.svg";
import { ReactComponent as paper } from "../assets/paper.svg";
import { ReactComponent as paperChecked } from "../assets/paper-checked.svg";
import { ReactComponent as trendingUp } from "../assets/trending-up.svg";
import { ReactComponent as trendingDown } from "../assets/trending-down.svg";
import { ReactComponent as circle } from "../assets/circle.svg";
import { ReactComponent as circle2 } from "../assets/circle2.svg";
import { ReactComponent as arrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as arrowLeft } from "../assets/arrow-left.svg";
import { ReactComponent as thrivecoinLogo } from "../assets/thrivecoin-logo.svg";
import { ReactComponent as chevronDown } from "../assets/chevron-down.svg";
import { ReactComponent as chevronUp } from "../assets/chevron-up.svg";
import { ReactComponent as chevronLeft } from "../assets/chevron-left.svg";
import { ReactComponent as chevronRight } from "../assets/chevron-right.svg";
import { ReactComponent as bell } from "../assets/bell.svg";
import { ReactComponent as link } from "../assets/link.svg";
import { ReactComponent as loader } from "../assets/loader.svg";
import { ReactComponent as plusCircle } from "../assets/plus-circle.svg";
import { ReactComponent as x } from "../assets/x.svg";
import { ReactComponent as checkedCircle } from "../assets/checked-circle.svg";
import { ReactComponent as search } from "../assets/search.svg";
import { ReactComponent as filter } from "../assets/filter.svg";
import { ReactComponent as helpCircle } from "../assets/help-circle.svg";
import { ReactComponent as moreVertical } from "../assets/more-vertical.svg";
import { ReactComponent as award } from "../assets/award.svg";
import { ReactComponent as bookmark } from "../assets/bookmark.svg";
import { ReactComponent as clipboard } from "../assets/clipboard.svg";
import { ReactComponent as send } from "../assets/send.svg";
import { ReactComponent as edit } from "../assets/edit.svg";
import { ReactComponent as creditCard } from "../assets/credit-card.svg";
import { ReactComponent as copy } from "../assets/copy.svg";
import { ReactComponent as check } from "../assets/check.svg";
import { ReactComponent as archive } from "../assets/archive.svg";
import { ReactComponent as trash } from "../assets/trash.svg";
import { ReactComponent as save } from "../assets/save.svg";
import { ReactComponent as zap } from "../assets/zap.svg";
import { ReactComponent as zapIcon } from "../assets/zap-icon.svg";
import { ReactComponent as codesandbox } from "../assets/codesandbox.svg";
import { ReactComponent as repeat } from "../assets/repeat.svg";
import { ReactComponent as wallet } from "../assets/wallet.svg";
import { ReactComponent as arrowDown }  from "../assets/arrow-down.svg";
import { ReactComponent as clock }  from "../assets/clock.svg";
import { ReactComponent as unlock }  from "../assets/unlock.svg";
import { ReactComponent as lock }  from "../assets/lock.svg";
import { ReactComponent as lockIcon }  from "../assets/lock-icon.svg";
import { ReactComponent as infinity }  from "../assets/infinity.svg";
import { ReactComponent as mail }  from "../assets/mail.svg";
import { ReactComponent as logIn }  from "../assets/log-in.svg";
import { ReactComponent as matic }  from "../assets/polygon-matic-logo.svg";
import { ReactComponent as replayIcon }  from "../assets/replay-icon.svg";
import { ReactComponent as eth }  from "../assets/ethereum-eth-logo.svg";
import { ReactComponent as trophy }  from "../assets/trophy.svg";
import { ReactComponent as trophyIcon }  from "../assets/trophy-icon.svg";
import { ReactComponent as trophyStar }  from "../assets/trophy-star.svg";
import { ReactComponent as alertTriangle }  from "../assets/alert-triangle.svg";
import { ReactComponent as fileText }  from "../assets/file-text.svg";
import { ReactComponent as star }  from "../assets/star.svg";
import { ReactComponent as star2 }  from "../assets/star-2.svg";
import { ReactComponent as starSponsored }  from "../assets/star-sponsored.svg";
import { ReactComponent as list }  from "../assets/list.svg";
import { ReactComponent as youtube }  from "../assets/youtube.svg";
import { ReactComponent as tree }  from "../assets/tree.svg";
import { ReactComponent as globe }  from "../assets/globe.svg";
import { ReactComponent as circleCheck }  from "../assets/circle-check.svg";
import { ReactComponent as cheers }  from "../assets/cheers.svg";
import { ReactComponent as alertCircle }  from "../assets/alert-circle.svg";
import { ReactComponent as check2 }  from "../assets/check2.svg";
import { ReactComponent as hands }  from "../assets/hands.svg";
import { ReactComponent as peoplePc }  from "../assets/people-pc.svg";
import { ReactComponent as earn }  from "../assets/earn.svg";
import { ReactComponent as impact }  from "../assets/impact.svg";
import { ReactComponent as play }  from "../assets/play.svg";
import { ReactComponent as playIcon }  from "../assets/play-icon.svg";
import { ReactComponent as heart }  from "../assets/heart.svg";
import { ReactComponent as successCheck }  from "../assets/success-check.svg";
import { ReactComponent as removeDanger }  from "../assets/remove-danger.svg";
import { ReactComponent as sparklesToast }  from "../assets/sparkles-toast.svg";
import { ReactComponent as logOut } from "../assets/log-out.svg";
import { ReactComponent as arrowDownLong } from "../assets/arrow-down-long.svg";
import { ReactComponent as sync } from "../assets/sync.svg";
import { ReactComponent as plus } from "../assets/plus.svg";
import { ReactComponent as smartphone } from "../assets/smartphone.svg";
import { ReactComponent as pc } from "../assets/pc.svg";
import { ReactComponent as upload } from "../assets/upload.svg";
import { ReactComponent as pen } from "../assets/pen.svg";
import { ReactComponent as pen2 } from "../assets/pen2.svg";
import { ReactComponent as logo } from "../assets/logo.svg";
import { ReactComponent as logoGold } from "../assets/logo-gold.svg";
import { ReactComponent as gripLines } from "../assets/grip-lines.svg";
import { ReactComponent as calendar } from "../assets/calendar.svg";
import { ReactComponent as logoGoldCircle } from "../assets/logo-gold-circle.svg";
import { ReactComponent as leaf } from "../assets/leaf.svg";
import { ReactComponent as downLong } from "../assets/down-long.svg";
import { ReactComponent as upLong } from "../assets/up-long.svg";
import { ReactComponent as leftLong } from "../assets/left-long.svg";
import { ReactComponent as rightLong } from "../assets/right-long.svg";
import { ReactComponent as filledCheckCircle } from "../assets/filled-circle-check.svg";
import { ReactComponent as atom } from "../assets/atom.svg";
import { ReactComponent as asteriks } from "../assets/asteriks.svg";
import { ReactComponent as personCarryBox } from "../assets/person-carry-box.svg";
import { ReactComponent as flag2 } from "../assets/flag2.svg";
import { ReactComponent as approved } from "../assets/approved.svg";
import { ReactComponent as medal } from "../assets/medal.svg";
import { ReactComponent as bolt } from "../assets/bolt.svg";
import { ReactComponent as astronaut } from "../assets/astronaut.svg";
import { ReactComponent as discord } from "../assets/discord.svg";
import { ReactComponent as twitter } from "../assets/twitter.svg";
import { ReactComponent as envelope } from "../assets/envelope.svg";
import { ReactComponent as rabbit } from "../assets/rabbit.svg";
import { ReactComponent as squareRight } from "../assets/square-right.svg";
import { ReactComponent as listTimeline } from "../assets/list-timeline.svg";
import { ReactComponent as fileLines } from "../assets/file-lines.svg";
import { ReactComponent as reply } from "../assets/reply.svg";
import { ReactComponent as clipboardCheck } from "../assets/clipboard-check.svg";
import { ReactComponent as badgeCheck } from "../assets/badge-check.svg";
import { ReactComponent as github } from "../assets/github.svg";
import { ReactComponent as heartFilled } from "../assets/heart-filled.svg";
import { ReactComponent as checkToSlot } from "../assets/check-to-slot.svg";
import { ReactComponent as twitterSquare } from "../assets/twitter-square.svg";
import { ReactComponent as discourse } from "../assets/discourse.svg";
import { ReactComponent as fileCertificate } from "../assets/file-certificate.svg";
import { ReactComponent as medal2 } from "../assets/medal-2.svg";
import { ReactComponent as medalFilled } from "../assets/medal-filled.svg";
import { ReactComponent as link2 } from "../assets/link2.svg";
import { ReactComponent as chain } from "../assets/chain.svg";
import { ReactComponent as discord2 } from "../assets/discord2.svg";
import { ReactComponent as metamask } from "../assets/metamask.svg";
import { ReactComponent as globeNotFilled } from "../assets/globe-not-filled.svg";
import { ReactComponent as search2 } from "../assets/search2.svg";

export const availableIcons = {
  "arrow-left": arrowLeft,
  "arrow-right": arrowRight,
  "arrow-down": arrowDown,
  "arrow-down-long": arrowDownLong,
  asteriks,
  astronaut,
  atom,
  award,
  approved,
  archive,
  "alert-triangle": alertTriangle,
  "alert-circle": alertCircle,
  "badge-check": badgeCheck,
  bookmark,
  bell,
  bolt,
  chain,
  cheers,
  "chevron-down": chevronDown,
  "chevron-up": chevronUp,
  "chevron-left": chevronLeft,
  "chevron-right": chevronRight,
  circle,
  circle2,
  "checked-circle": checkedCircle,
  "check-to-slot": checkToSlot,
  "circle-check": circleCheck,
  clipboard,
  "clipboard-check": clipboardCheck,
  copy,
  check,
  check2,
  codesandbox,
  clock,
  "credit-card": creditCard,
  discord,
  discord2,
  discourse,
  "down-long": downLong,
  edit,
  eth,
  earn,
  envelope,
  "file-certificate": fileCertificate,
  "file-lines": fileLines,
  "file-text": fileText,
  flag,
  "flag-2": flag2,
  filter,
  github,
  globe,
  "globe-not-filled": globeNotFilled,
  "heart-filled": heartFilled,
  "help-circle": helpCircle,
  hands,
  heart,
  infinity,
  impact,
  leaf,
  "left-long": leftLong,
  link,
  "list-timeline": listTimeline,
  "link-2": link2,
  loader,
  lock,
  "lock-icon": lockIcon,
  "log-in": logIn,
  logo,
  "logo-gold-circle": logoGoldCircle,
  mail,
  matic,
  metamask,
  medal,
  "medal-filled": medalFilled,
  "medal-2": medal2,
  "more-vertical": moreVertical,
  pc,
  paper,
  pen,
  "pen-2": pen2,
  "paper-checked": paperChecked,
  plus,
  "plus-circle": plusCircle,
  "people-pc": peoplePc,
  play,
  "play-icon": playIcon,
  "person-carry-box": personCarryBox,
  rabbit,
  repeat,
  reply,
  "replay-icon": replayIcon,
  "remove-danger": removeDanger,
  "right-long": rightLong,
  search,
  search2,
  send,
  save,
  star,
  smartphone,
  "star-2": star2,
  "star-sponsored": starSponsored,
  "success-check": successCheck,
  "sparkles-toast": sparklesToast,
  "square-right": squareRight,
  sync,
  trash,
  trophy,
  "trophy-icon": trophyIcon,
  "trending-up": trendingUp,
  "trending-down": trendingDown,
  "thrivecoin-logo": thrivecoinLogo,
  "trophy-star": trophyStar,
  tree,
  twitter,
  "twitter-square": twitterSquare,
  upload,
  "up-long": upLong,
  user,
  "user-2": user2,
  users,
  "user-checked": userChecked,
  "user-x": userX,
  unlock,
  wallet,
  x,
  zap,
  "zap-icon": zapIcon,
  list,
  youtube,
  "log-out": logOut,
  "logo-gold": logoGold,
  "grip-lines": gripLines,
  calendar,
  "filled-check-circle": filledCheckCircle,
};

export const iconNames = Object.keys(availableIcons);

const IconSvg = styled(({ spacing, icon, width, height, color, className, onClick }) => {
  const Icon = availableIcons[icon];

  if(!Icon){
    throw `Missing icon named: "${icon}", please check your version of ui-components`;
  }

  return <Icon onClick={onClick} spacing={spacing} width={width} color={color} className={className} />;
})`
  ${useSpacingProps}
  ${color}

  ${({ width, height }) =>
    width &&
    `
      width: ${width};
      height: ${height};
    `}
`;

IconSvg.propTypes = {
  icon: PropTypes.oneOf(Object.keys(availableIcons)).isRequired,
  color: PropTypes.string,
  width: PropTypes.string,
};

IconSvg.defaultProps = {
  width: "24px",
  height: "auto",
  color: "inherit",
};

export default IconSvg;
