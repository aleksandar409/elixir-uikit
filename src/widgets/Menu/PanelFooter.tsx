import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon, PancakeRoundTreeIcon, CogIcon, SvgProps } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import Dropdown from "../../components/Dropdown/Dropdown";
import Link from "../../components/Link/Link";
import Skeleton from "../../components/Skeleton/Skeleton";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import MenuButton from "./MenuButton";
import * as IconModule from "./icons";
import { socials, MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon, LanguageIcon } = Icons;

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: #ffffff;
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  margin-right: 8px;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  cakePriceTreeUsd,
  currentLang,
  langs,
  setLang,
  priceLink,
  priceLinkTree,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <SocialEntry>
      <Flex>
        {cakePriceUsd ? (
          <PriceLink href={priceLinkTree} target="_blank">
            <PancakeRoundTreeIcon width="24px" mr="8px" />
            <Text bold style={{color:'#C8A2C8'}}>{`$${cakePriceUsd.toFixed(3)}`}</Text>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24} />
        )}
      </Flex>
      <Flex>
        {socials.map((social, index) => {
          const Icon = Icons[social.icon];
          const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
          const mr = index < socials.length - 1 ? "10px" : 0;
          if (social.items) {
            return (
              <Dropdown key={social.label} position="top-right" target={<Icon {...iconProps} mr={mr} />}>
                {social.items.map((item) => (
                  <Link external key={item.label} href={item.href} aria-label={item.label} style={{color:'#C8A2C8'}}>
                    {item.label}
                  </Link>
                ))}
              </Dropdown>
            );
          }
          return (
            <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
              <Icon {...iconProps} />
            </Link>
          );
        })}
      </Flex>
      <Dropdown
          position="top"
          target={
            <Button variant="text" pr="6px" pl="6px" startIcon={<LanguageIcon color="textSubtle" width="24px" />}>
              <Text style={{color:'#C8A2C8'}}>{currentLang?.toUpperCase()}</Text>
            </Button>
          }
        >
          {langs.map((lang) => (
            <MenuButton
              key={lang.code}
              fullWidth
              onClick={() => setLang(lang)}
              // Safari fix
              style={{ minHeight: "32px", height: "auto", color:'#C8A2C8' }}
            >
              {lang.language}
            </MenuButton>
          ))}
        </Dropdown>
      </SocialEntry>
    </Container>
  );
};

export default PanelFooter;
